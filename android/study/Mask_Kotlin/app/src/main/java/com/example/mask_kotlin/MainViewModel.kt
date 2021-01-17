package com.example.mask_kotlin

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.mask_java.repository.MaskService
import com.example.mask_kotlin.model.Store
import kotlinx.coroutines.launch
import retrofit2.Retrofit
import retrofit2.converter.moshi.MoshiConverterFactory

class MainViewModel : ViewModel() {
    val itemLiveData = MutableLiveData<List<Store>>()
    val loadingLiveData = MutableLiveData<Boolean>()

    private val service: MaskService

    init {
        val retrofit = Retrofit.Builder().baseUrl(MaskService.BASE_URL)
            .addConverterFactory(MoshiConverterFactory.create()).build()
        service = retrofit.create(MaskService::class.java)
        fetchStoreInfo()
    }

    fun fetchStoreInfo() {
        loadingLiveData.value = true
        viewModelScope.launch {
            val storeInfo = service.fetchStoreInfo()

            itemLiveData.value = storeInfo.stores.filter { it.remain_stat != null }
            loadingLiveData.value = false
        }
    }

}