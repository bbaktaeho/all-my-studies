package com.example.todolist.screens

import com.example.todolist.models.TodoModel

class MainPresenter: MainContract.Actions {
    var _views: MainContract.Views? = null
    constructor(_views: MainContract.Views?) {
        this._views = _views
        initScreen()
    }

    override fun initScreen() {
        _views?.setupViews()
        _views?.setupListeners()
        fetchAllTodoFromDatabase()
    }

    override fun addTodoToRecyclerView() {
        _views?.addTodoRecyclerView(_views?.getTodo()!!)
    }

    override fun addTodoToDatabase() {
        _views?.addTodoToDatabase(_views?.getTodo()!!)
    }

    override fun fetchAllTodoFromDatabase() {
        _views?.addTodoRecyclerViewList(_views?.getAllTodoFromDatabase() as ArrayList<TodoModel>)
    }
}