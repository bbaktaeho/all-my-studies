package com.example.todolist.adapter

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.appcompat.widget.AppCompatEditText
import androidx.appcompat.widget.AppCompatImageButton
import androidx.appcompat.widget.AppCompatTextView
import androidx.recyclerview.widget.RecyclerView
import com.example.todolist.R
import com.example.todolist.listeners.OnItemClicked
import com.example.todolist.models.TodoModel

class TodoAdapter(var context: Context, var itemClicked: OnItemClicked): RecyclerView.Adapter<TodoAdapter.Holder>() {

     var list = arrayListOf<TodoModel>()

    fun setItem(items: ArrayList<TodoModel>) {
        this.list.clear()
        this.list.addAll(items)
        notifyDataSetChanged()
    }

    fun addItem(item: TodoModel) {
        list.add(item)
        notifyDataSetChanged()
    }

    fun deleteItem(position: Int) {
        list.removeAt(position)
        notifyItemRemoved(position)
        notifyDataSetChanged()
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): Holder {
        val itemView = LayoutInflater.from(context).inflate(R.layout.list_item, parent, false)
        return Holder(itemView)
    }

    override fun getItemCount(): Int {
        return list.size
    }

    override fun onBindViewHolder(holder: Holder, position: Int) {
        holder.item_todo.text = list[position].task
    }

    inner class Holder(itemView: View): RecyclerView.ViewHolder(itemView) {
        val item_todo = itemView.findViewById<AppCompatTextView>(R.id.item_todo)
        val btn_delete = itemView.findViewById<AppCompatImageButton>(R.id.btn_delete)

        init {
            btn_delete.setOnClickListener {
                itemClicked.onClick(adapterPosition)
            }
        }
    }
}