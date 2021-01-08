package com.example.counter

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.SavedStateHandle
import androidx.lifecycle.ViewModel

class MainViewModel(val handle: SavedStateHandle) : ViewModel() {
    private var count = handle.get<Int>("count") ?: 0
        set(value) {
            countLiveData.value = value
            handle.set("count", value)
            field = value
        }

    val countLiveData = MutableLiveData<Int>()

    fun increaseCount() {
        count++
    }

    fun decreaseCount() {
        count--
    }
}