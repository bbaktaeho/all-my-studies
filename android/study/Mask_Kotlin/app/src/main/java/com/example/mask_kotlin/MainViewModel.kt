package com.example.mask_kotlin

import android.Manifest
import android.annotation.SuppressLint
import android.content.pm.PackageManager
import android.util.Log
import androidx.core.app.ActivityCompat
import androidx.hilt.lifecycle.ViewModelInject
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.mask_java.repository.MaskService
import com.example.mask_kotlin.model.Store
import com.google.android.gms.location.FusedLocationProviderClient
import com.google.android.gms.location.LocationServices
import kotlinx.coroutines.launch
import retrofit2.Retrofit
import retrofit2.converter.moshi.MoshiConverterFactory

class MainViewModel @ViewModelInject constructor(
    private val service: MaskService,
    private val fusedLocationClient: FusedLocationProviderClient
) : ViewModel() {
    val itemLiveData = MutableLiveData<List<Store>>()
    val loadingLiveData = MutableLiveData<Boolean>()


    init {
        fetchStoreInfo()
    }

    @SuppressLint("MissingPermission")
    fun fetchStoreInfo() {
        loadingLiveData.value = true

        fusedLocationClient.lastLocation.addOnSuccessListener { location ->
            Log.d("LOCATION", "fetchStoreInfo: " + location.latitude +", " + location.longitude)
            viewModelScope.launch {
                val storeInfo = service.fetchStoreInfo()

                itemLiveData.value = storeInfo.stores.filter { it.remain_stat != null }
                loadingLiveData.value = false
            }
        }.addOnFailureListener { e ->
            loadingLiveData.value = false
        }

    }

}