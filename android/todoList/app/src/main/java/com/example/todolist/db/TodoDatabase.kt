package com.example.todolist.db

import android.content.Context
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase
import com.example.todolist.dao.TodoDAO
import com.example.todolist.models.TodoModel

@Database(entities = [TodoModel::class], version = 1)
abstract class TodoDatabase: RoomDatabase() {
    companion object {
        val DB_NAME = "todo_table"
        var instance: TodoDatabase? = null

        fun getInstance(context: Context): TodoDatabase {
            if (instance == null) {
                instance = Room.databaseBuilder(context, TodoDatabase::class.java, DB_NAME)
                    .allowMainThreadQueries()
                    .build()
            }
            return instance as TodoDatabase
        }
    }

    abstract fun todoDAO(): TodoDAO
}