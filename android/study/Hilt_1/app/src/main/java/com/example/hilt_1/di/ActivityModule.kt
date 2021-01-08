package com.example.hilt_1.di

import com.example.hilt_1.di.qualifier.ActivityHash
import com.example.hilt_1.di.qualifier.AppHash
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.android.components.ApplicationComponent

@Module
@InstallIn(ApplicationComponent::class)
object ActivityModule {

    @ActivityHash
    @Provides
    fun provideHash() = hashCode().toString()
}