package com.example.mvvm_1.db

import androidx.lifecycle.LiveData
import androidx.room.*

@Dao
interface SubscriberDAO {
    @Insert
    suspend fun insertSubscriber(subscriber: Subscriber): Long

    @Update
    suspend fun updateSubscriber(subscriber: Subscriber): Int

    @Delete
    suspend fun deleteSubscriber(subscriber: Subscriber): Int

    @Query(value = "DELETE FROM subscriber_data_table")
    suspend fun deleteAll(): Int

    @Query(value = "SELECT * FROM subscriber_data_table")
    fun getAllSubscriber(): LiveData<List<Subscriber>>
}