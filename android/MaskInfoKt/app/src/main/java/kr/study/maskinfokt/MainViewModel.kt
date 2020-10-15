package kr.study.maskinfokt

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import kotlinx.coroutines.launch
import kr.study.maskinfokt.models.Store
import kr.study.maskinfokt.repository.MaskService
import retrofit2.Retrofit
import retrofit2.converter.moshi.MoshiConverterFactory

class MainViewModel : ViewModel() {
    val itemLiveData = MutableLiveData<List<Store>>()
    val loadingLiveData = MutableLiveData<Boolean>()

    private val service: MaskService

    init {
        val retrofit = Retrofit.Builder()
            .baseUrl(MaskService.BASE_URL)
            .addConverterFactory(MoshiConverterFactory.create())
            .build();

        service = retrofit.create(MaskService::class.java)

        fetchStoreInfo()
    }

    //    suspend 메서드 안에서 suspend를 사용할 수 있음
    fun fetchStoreInfo() {
        loadingLiveData.value = true

        // 코루틴에서 사용, 코드를 기다려줌
        viewModelScope.launch {
            val storeInfo = service.fetchStoreInfo(37.188078, 127.043002)
            itemLiveData.value = storeInfo.stores

            loadingLiveData.value = false
        }
    }
}