package com.example.ch1_room

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import androidx.lifecycle.Observer
import androidx.room.Room
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        var test = mutableListOf<String>()

        val db = Room.databaseBuilder(
            applicationContext,
            TodoDatabase::class.java, "TodoDB"
        ).allowMainThreadQueries().build()


        db.todoDao().getAll().observe(this, Observer { todos ->
            todo_text.text = todos.toString()
        })


        todo_add.setOnClickListener {
            db.todoDao().insert(Todo(todo_edit.text.toString()))

        }

    }
}