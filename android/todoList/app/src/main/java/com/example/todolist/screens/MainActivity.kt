package com.example.todolist.screens

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.todolist.R
import com.example.todolist.adapter.TodoAdapter
import com.example.todolist.db.TodoDatabase
import com.example.todolist.listeners.OnItemClicked
import com.example.todolist.models.TodoModel
import kotlinx.android.synthetic.main.activity_main.*
import kotlin.random.Random

class MainActivity : AppCompatActivity(), MainContract.Views {

    lateinit var presenter: MainPresenter
    lateinit var mAdapter: TodoAdapter
    lateinit var db: TodoDatabase

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        db = TodoDatabase.getInstance(this)
        presenter = MainPresenter(this)
    }

    override fun setupViews() {
        mAdapter = TodoAdapter(this, object: OnItemClicked {
            override fun onClick(position: Int) {
                db.todoDAO().deleteTodo(mAdapter.list[position])
                mAdapter.deleteItem(position)
            }
        })
        todo_recyclerView.apply {
            layoutManager = LinearLayoutManager(this.context)
            adapter = mAdapter
        }
    }

    override fun setupListeners() {
        btn_add.setOnClickListener {
            val task = edt_write_todo.text.toString()
            if (task == "") {
                Toast.makeText(this, "할 일을 입력하세유", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }else {
                presenter.addTodoToRecyclerView()
                presenter.addTodoToDatabase()
                edt_write_todo.setText("")
            }
        }
    }

    override fun getTodo(): TodoModel {
        return TodoModel(
            Random.nextLong(),
            edt_write_todo.text.toString()
        )
    }

    override fun addTodoToDatabase(item: TodoModel) {
        db.todoDAO().addTodo(item)
    }

    override fun deleteTodoFromDatabase(item: TodoModel) {
        db.todoDAO().deleteTodo(item)
    }

    override fun getAllTodoFromDatabase(): List<TodoModel> {
        return db.todoDAO().getAllDataFromDatabase()
    }

    override fun addTodoRecyclerViewList(list: ArrayList<TodoModel>) {
        mAdapter.setItem(list)
    }

    override fun addTodoRecyclerView(item: TodoModel) {
        mAdapter.addItem(item)
    }
}