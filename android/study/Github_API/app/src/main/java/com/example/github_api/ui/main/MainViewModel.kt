package com.example.github_api.ui.main

import androidx.hilt.lifecycle.ViewModelInject
import androidx.lifecycle.ViewModel
import androidx.lifecycle.liveData
import com.example.github_api.model.GithubDataModel
import com.example.github_api.model.ResultData
import com.example.github_api.usecase.DataUseCase

class MainViewModel @ViewModelInject constructor(private val useCase: DataUseCase) : ViewModel() {
    fun getRepositoriesList() =
        liveData<ResultData<GithubDataModel>> {
            emit(ResultData.Loading())
            emit(useCase.getRepositoriesList())
        }

}