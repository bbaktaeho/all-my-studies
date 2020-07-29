package com.example.todolist.screens

import com.example.todolist.models.TodoModel

interface MainContract {
    interface Views {
        fun setupViews()
        fun setupListeners()
        fun getTodo(): TodoModel
        fun addTodoToDatabase(item: TodoModel)
        fun deleteTodoFromDatabase(item: TodoModel)
        fun getAllTodoFromDatabase(): List<TodoModel>
        fun addTodoRecyclerViewList(item: ArrayList<TodoModel>)
        fun addTodoRecyclerView(item: TodoModel)
    }

    interface Actions {
        fun initScreen()
        fun addTodoToRecyclerView()
        fun addTodoToDatabase()
        fun fetchAllTodoFromDatabase()
    }
}