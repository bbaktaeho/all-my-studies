package com.example.ch1_room

import android.app.Application
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.LiveData
import androidx.room.Room
import kotlinx.android.synthetic.main.activity_main.*

class MainViewModel(application: Application): AndroidViewModel(application) {
    private val db = Room.databaseBuilder(
        application,
        TodoDatabase::class.java, "TodoDB"
    ).allowMainThreadQueries().build()

    fun getAll(): LiveData<List<Todo>> {
        return db.todoDao().getAll()
    }

    // suspend 로 선언하면 비동기로 처리해야됨
    fun insert(todo: Todo) {
        db.todoDao().insert(todo)
    }
}