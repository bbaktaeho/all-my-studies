package kr.study.maskinfo.viewModels;

import android.util.Log;

import androidx.lifecycle.MutableLiveData;
import androidx.lifecycle.ViewModel;

import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import kr.study.maskinfo.MainActivity;
import kr.study.maskinfo.models.Store;
import kr.study.maskinfo.models.StoreInfo;
import kr.study.maskinfo.repository.MaskService;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.moshi.MoshiConverterFactory;

public class MainViewModel extends ViewModel {
    private static final String TAG = MainActivity.class.getSimpleName();

    // 변경이 가능한 라이브 데이터
    // 처음엔 하나도 없고
    public MutableLiveData<List<Store>> liveDataItems = new MutableLiveData<>();

    private Retrofit retrofit = new Retrofit.Builder()
            .baseUrl(MaskService.BASE_URL)
            .addConverterFactory(MoshiConverterFactory.create())
            .build();

    private MaskService service = retrofit.create(MaskService.class);

    // 데이터를 받아오는 준비를 한 것
    private Call<StoreInfo> storeInfoCall = service.fetchStoreInfo();

    public MainViewModel() {
        // 데이터 요청
        fetchStoreInfo();
    }

    // liveData 이용
    public void fetchStoreInfo() {
        // clone 이거 쓰면 랜드스케이프할 때 가능
        storeInfoCall.clone().enqueue(new Callback<StoreInfo>() {
            // 성공
            @Override
            public void onResponse(Call<StoreInfo> call, Response<StoreInfo> response) {
                assert response.body() != null;
                // stream API
                List<Store> items = response.body().getStores().stream().filter(item -> item.getRemainStat() != null).collect(Collectors.toList());

                liveDataItems.postValue(items);
            }
            // 실패
            @Override
            public void onFailure(Call<StoreInfo> call, Throwable t) {
                Log.e(TAG, "onFailure : ", t);
                liveDataItems.postValue(Collections.emptyList());
            }
        });
    }
}
