package kr.study.dikt.di

import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.android.components.ApplicationComponent
import kr.study.dikt.di.qualifier.AppHash

@Module
@InstallIn(ApplicationComponent::class)
object ActivityModule {

    @AppHash
    @Provides
    fun provideHash() = hashCode().toString()
}