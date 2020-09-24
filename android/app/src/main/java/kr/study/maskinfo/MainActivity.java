package kr.study.maskinfo;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.util.Log;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.security.auth.login.LoginException;

import kr.study.maskinfo.adapters.StoreAdapter;
import kr.study.maskinfo.models.Store;
import kr.study.maskinfo.models.StoreInfo;
import kr.study.maskinfo.repository.MaskService;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.moshi.MoshiConverterFactory;

// Retrofit
// moshi
public class MainActivity extends AppCompatActivity {
    private static final String TAG = MainActivity.class.getSimpleName();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        RecyclerView recyclerView = findViewById(R.id.recycler_view);
        recyclerView.setLayoutManager(new LinearLayoutManager(this, RecyclerView.VERTICAL, false));
        final StoreAdapter adapter = new StoreAdapter();
        recyclerView.setAdapter(adapter);

        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(MaskService.BASE_URL)
                .addConverterFactory(MoshiConverterFactory.create())
                .build();

        MaskService service = retrofit.create(MaskService.class);

        // 데이터를 받아오는 준비를 한 것
        Call<StoreInfo> storeInfoCall = service.fetchStoreInfo();

        storeInfoCall.enqueue(new Callback<StoreInfo>() {
            // 성공
            @Override
            public void onResponse(Call<StoreInfo> call, Response<StoreInfo> response) {
                List<Store> items = response.body().getStores();
                adapter.updateItems(items);
            }
            // 실패
            @Override
            public void onFailure(Call<StoreInfo> call, Throwable t) {
                Log.e(TAG, "onFailure : ", t);
            }
        });
    }
}