package kr.study.maskinfo;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProvider;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import javax.security.auth.login.LoginException;

import kr.study.maskinfo.adapters.StoreAdapter;
import kr.study.maskinfo.models.Store;
import kr.study.maskinfo.models.StoreInfo;
import kr.study.maskinfo.repository.MaskService;
import kr.study.maskinfo.viewModels.MainViewModel;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.moshi.MoshiConverterFactory;

// Retrofit
// moshi
public class MainActivity extends AppCompatActivity {
    // 뷰 모델 가져오기
    MainViewModel viewModel;


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.main_menu, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        switch (item.getItemId()) {
            case R.id.action_refrash: viewModel.fetchStoreInfo(); return true;
            default: return super.onOptionsItemSelected(item);
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        RecyclerView recyclerView = findViewById(R.id.recycler_view);
        recyclerView.setLayoutManager(new LinearLayoutManager(this, RecyclerView.VERTICAL, false));
        final StoreAdapter adapter = new StoreAdapter();
        recyclerView.setAdapter(adapter);
        viewModel = new ViewModelProvider(this).get(MainViewModel.class);
        // this의 라이프사이클에 맞춰서 관찰하겠다!!
        // UI 변경 감지 후 업데이트
        viewModel.liveDataItems.observe(this, stores -> {
            adapter.updateItems(stores);
            getSupportActionBar().setTitle("마스크 재고 있는 곳 : "+stores.size());
        });
    }
}