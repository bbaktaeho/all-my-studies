package com.example.github_api.network

import com.example.github_api.model.GithubDataModel
import com.example.github_api.util.NetworkConstants
import retrofit2.http.GET

interface ApiService {
    @GET(NetworkConstants.URL_REPOSITORIES)
    suspend fun getPublicRepositories(): GithubDataModel
}