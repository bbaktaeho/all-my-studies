package com.example.github_api.usecase

import com.example.github_api.model.GithubDataModel
import com.example.github_api.model.ResultData
import com.example.github_api.repository.DataRepository
import javax.inject.Inject

class DataUseCase @Inject constructor(private val dataRepository: DataRepository) {
    suspend fun getRepositoriesList(): ResultData<GithubDataModel> {
        val publicRepositories = dataRepository.getPublicRepositories()

        return if (!publicRepositories.isNullOrEmpty()) {
            ResultData.Success(publicRepositories)
        } else {
            ResultData.Failed("Something went wrong")
        }
    }
}