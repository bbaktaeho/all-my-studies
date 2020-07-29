package com.example.todolist.models

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey


@Entity(tableName = "todo_table")
data class TodoModel(
    @PrimaryKey
    var key: Long,

    @ColumnInfo(name = "task")
    var task: String
)