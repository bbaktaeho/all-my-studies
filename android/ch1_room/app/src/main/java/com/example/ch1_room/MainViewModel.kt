package com.example.ch1_room

import android.app.Application
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.LiveData
import androidx.lifecycle.viewModelScope
import androidx.room.Room
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class MainViewModel(application: Application): AndroidViewModel(application) {
    private val db = Room.databaseBuilder(
        application,
        TodoDatabase::class.java, "TodoDB"
    ).build()

    var todos: LiveData<List<Todo>>
    var newTodo: String? = null

    init {
        todos =getAll()
    }

    fun getAll(): LiveData<List<Todo>> {
        return db.todoDao().getAll()
    }

    // suspend 로 선언하면 비동기로 처리해야됨
//    suspend fun insert(todo: Todo) {
//        db.todoDao().insert(todo)
//    }
    fun insert(todo: String) {
        viewModelScope.launch(Dispatchers.IO) {
            db.todoDao().insert(Todo(todo))
        }
    }
}