package kr.study.maskinfokt

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import kr.study.maskinfokt.models.Store
import kr.study.maskinfokt.repository.MaskService
import retrofit2.Retrofit
import retrofit2.converter.moshi.MoshiConverterFactory

class MainViewModel: ViewModel() {
    val itemLiveData = MutableLiveData<List<Store>>()
    val loadingLiveData = MutableLiveData<Boolean>()

    private val service: MaskService

    init {
        val retrofit = Retrofit.Builder()
            .baseUrl(MaskService.BASE_URL)
            .addConverterFactory(MoshiConverterFactory.create())
            .build();

        service = retrofit.create(MaskService::class.java)
    }
}