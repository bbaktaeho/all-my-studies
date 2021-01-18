package com.example.mask_kotlin.di.module

import com.example.mask_java.repository.MaskService
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.android.components.ApplicationComponent
import retrofit2.Retrofit
import retrofit2.converter.moshi.MoshiConverterFactory
import javax.inject.Inject

@Module
@InstallIn(ApplicationComponent::class) // 전체 어플리케이션으로 스코프를 잡음 (싱글톤)
object NetworkModule {

    @Provides
    fun provideMaskService(): MaskService {
        val retrofit = Retrofit.Builder().baseUrl(MaskService.BASE_URL)
            .addConverterFactory(MoshiConverterFactory.create()).build()
        return retrofit.create(MaskService::class.java)
    }
}