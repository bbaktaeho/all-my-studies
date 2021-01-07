package com.example.mvvm_1

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.Toast
import androidx.databinding.DataBindingUtil
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProvider
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.mvvm_1.databinding.ActivityMainBinding
import com.example.mvvm_1.db.Subscriber
import com.example.mvvm_1.db.SubscriberDatabase
import com.example.mvvm_1.db.SubscriberRepository
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding
    private lateinit var subscriberViewModel: SubscriberViewModel

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        binding = DataBindingUtil.setContentView(this, R.layout.activity_main)
        val dao = SubscriberDatabase.getInstance(application).subscriberDAO
        val repository = SubscriberRepository(dao)
        val factory = SubscriberViewModelFactory(repository)
        subscriberViewModel = ViewModelProvider(this, factory).get(SubscriberViewModel::class.java)
        binding.myViewModel = subscriberViewModel
        binding.lifecycleOwner = this
        initRecyclerView()

        subscriberViewModel.message.observe(this, Observer {
            it.getContentIfNotHandled()?.let {
                Toast.makeText(this, it, Toast.LENGTH_SHORT).show()
            }
        })
    }

    private fun initRecyclerView() {
        binding.recyclerSubscriber.layoutManager = LinearLayoutManager(this)
        displaySubscribersList()
    }

    private fun displaySubscribersList() {
        subscriberViewModel.subscribers.observe(this, Observer {
            Log.i("MYTAG", it.toString())
            binding.recyclerSubscriber.adapter = MyRecyclerViewAdapter(it) { selectedItem: Subscriber ->
                listItemClicked(
                    selectedItem
                )
            }
        })
    }

    private fun listItemClicked(subscriber: Subscriber) {
//        Toast.makeText(this, "selected name ${subscriber.name}", Toast.LENGTH_SHORT).show()
        subscriberViewModel.initUpdateAndDelete(subscriber)
    }
}