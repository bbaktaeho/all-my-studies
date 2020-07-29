package com.example.todolist.dao

import androidx.room.Dao
import androidx.room.Delete
import androidx.room.Insert
import androidx.room.Query
import com.example.todolist.models.TodoModel

@Dao
interface TodoDAO {
    @Query(value = "select * from todo_table")
    fun getAllDataFromDatabase(): List<TodoModel>

    @Insert
    fun addTodo(item: TodoModel)

    @Delete
    fun deleteTodo(item: TodoModel)
}