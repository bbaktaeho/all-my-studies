package com.example.mask_java;

import android.location.Location;
import android.util.Log;

import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;

import com.example.mask_java.model.Store;
import com.example.mask_java.model.StoreInfo;
import com.example.mask_java.repository.MaskService;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.moshi.MoshiConverterFactory;

public class MainViewModel extends ViewModel {
    private static final String TAG = MainViewModel.class.getSimpleName();
    public Location location;
    public MutableLiveData<List<Store>> itemLiveData = new MutableLiveData<>();
    public MutableLiveData<Boolean> loadingLiveData = new MutableLiveData<>();
    private Retrofit retrofit = new Retrofit.Builder()
            .baseUrl(MaskService.BASE_URL)
            .addConverterFactory(MoshiConverterFactory.create())
            .build();
    private MaskService service = retrofit.create(MaskService.class);
    private Call<StoreInfo> storeInfoCall = service.fetchStoreInfo();

    public void fetchStoreInfo() {
        // 로딩 시작
        loadingLiveData.setValue(true);
        storeInfoCall.clone().enqueue(new Callback<StoreInfo>() {
            @Override
            public void onResponse(Call<StoreInfo> call, Response<StoreInfo> response) {
                List<Store> items = response
                        .body().getStores()
                        .stream().filter(item -> item.getRemainStat() != null).collect(Collectors.toList());

                itemLiveData.postValue(items);
                // 로딩 끝
                loadingLiveData.postValue(false);
            }

            @Override
            public void onFailure(Call<StoreInfo> call, Throwable t) {
                Log.e(TAG, "onFailure: ", t);
                itemLiveData.postValue(Collections.emptyList());
                // 로딩 끝
                loadingLiveData.postValue(false);
            }
        });
    }
}
