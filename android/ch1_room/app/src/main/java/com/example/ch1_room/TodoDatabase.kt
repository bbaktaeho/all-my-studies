package com.example.ch1_room

import androidx.room.Database
import androidx.room.RoomDatabase

@Database(exportSchema = false, entities = [Todo::class], version = 1)
abstract class TodoDatabase: RoomDatabase() {
    abstract fun todoDao(): TodoDao
}