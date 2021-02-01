package com.example.github_api.di

import com.example.github_api.network.ApiService
import com.example.github_api.repository.DataRepository
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.android.components.ActivityRetainedComponent

@InstallIn(ActivityRetainedComponent::class)
@Module
object RepositoryModule {
    @Provides
    fun providesDataRepo(apiService: ApiService) = DataRepository(apiService)
}