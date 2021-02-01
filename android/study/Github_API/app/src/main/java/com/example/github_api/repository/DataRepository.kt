package com.example.github_api.repository

import com.example.github_api.network.ApiService
import javax.inject.Inject

class DataRepository @Inject constructor(private val apiService: ApiService) {
    suspend fun getPublicRepositories() = apiService.getPublicRepositories()
}