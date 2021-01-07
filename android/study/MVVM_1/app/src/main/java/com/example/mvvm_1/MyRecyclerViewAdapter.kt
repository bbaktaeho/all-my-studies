package com.example.mvvm_1

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.databinding.DataBindingUtil
import androidx.recyclerview.widget.RecyclerView
import com.example.mvvm_1.databinding.ItemRecyclerBinding
import com.example.mvvm_1.db.Subscriber
import com.example.mvvm_1.generated.callback.OnClickListener

class MyRecyclerViewAdapter(private val subscribers: List<Subscriber>, private val clickListener: (Subscriber) -> Unit): RecyclerView.Adapter<MyViewHolder>() {
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MyViewHolder {
        val layoutInflater = LayoutInflater.from(parent.context)
        val binding = DataBindingUtil.inflate<ItemRecyclerBinding>(layoutInflater, R.layout.item_recycler, parent, false)
        return MyViewHolder(binding)
    }

    override fun onBindViewHolder(holder: MyViewHolder, position: Int) {
        holder.bind(subscribers[position], clickListener)
    }

    override fun getItemCount(): Int {
        return subscribers.size
    }
}

class MyViewHolder(private val binding: ItemRecyclerBinding): RecyclerView.ViewHolder(binding.root) {
    fun bind(subscriber: Subscriber, clickListener: (Subscriber) -> Unit) {
        binding.txtNameView.text = subscriber.name
        binding.txtEmailView.text = subscriber.email
        binding.itemListLayout.setOnClickListener {
            clickListener(subscriber)
        }
    }
}