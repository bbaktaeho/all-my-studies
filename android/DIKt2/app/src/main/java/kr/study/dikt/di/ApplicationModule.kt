package kr.study.dikt.di

import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.android.components.ApplicationComponent
import kr.study.dikt.di.qualifier.ActivityHash

@Module
@InstallIn(ApplicationComponent::class) // 전체 앱의 스코프에 해당하는 모듈을 작성하겠다!
object ApplicationModule {

    @ActivityHash
    @Provides
    fun provideHash() = hashCode().toString()
}