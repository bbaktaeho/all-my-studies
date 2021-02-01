package com.example.github_api.di

import com.example.github_api.repository.DataRepository
import com.example.github_api.usecase.DataUseCase
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.android.components.ActivityRetainedComponent

@InstallIn(ActivityRetainedComponent::class)
@Module
object UseCaseModule {
    @Provides
    fun providesUseCase(dataRepository: DataRepository): DataUseCase  = DataUseCase(dataRepository)
}