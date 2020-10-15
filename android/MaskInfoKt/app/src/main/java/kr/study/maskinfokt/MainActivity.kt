package kr.study.maskinfokt

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import androidx.activity.viewModels
import androidx.lifecycle.Observer
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import kotlinx.android.synthetic.main.activity_main.*
import kr.study.maskinfokt.models.Store

class MainActivity : AppCompatActivity() {
    // ktx 코틀린 확장 함수
    private val viewModel: MainViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val storeAdapter = StoreAdapter()


        recyclerview_store.apply {
            // applicationContext, this@MainActivity
            layoutManager = LinearLayoutManager(applicationContext, RecyclerView.VERTICAL, false)
            adapter = storeAdapter
        }

        viewModel.apply {
            itemLiveData.observe(this@MainActivity, Observer {
                storeAdapter.updateItems(it)
            })

            loadingLiveData.observe(this@MainActivity, Observer {
                isLoading -> progressBar.visibility = if (isLoading) View.VISIBLE else View.GONE
            })
        }
    }
}