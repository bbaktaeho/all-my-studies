package com.example.hilt_1.ui.main

import androidx.hilt.lifecycle.ViewModelInject
import androidx.lifecycle.ViewModel
import com.example.hilt_1.data.MyRepository
import javax.inject.Inject


class MainViewModel @ViewModelInject constructor(
    private val repository: MyRepository
) : ViewModel() {
    fun getRepositoryHash() = repository.toString()
}