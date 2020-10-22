package kr.study.dikt.ui.main

import androidx.hilt.lifecycle.ViewModelInject
import androidx.lifecycle.ViewModel
import kr.study.dikt.data.MyRepository

class MainViewModel @ViewModelInject constructor(
    private val repository: MyRepository
): ViewModel() {
    fun getRepositoryHash() = repository.hashCode().toString()
}