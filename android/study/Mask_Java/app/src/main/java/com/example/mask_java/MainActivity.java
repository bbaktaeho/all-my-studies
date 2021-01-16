package com.example.mask_java;

import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.ViewModelProvider;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.Manifest;
import android.annotation.SuppressLint;
import android.location.Location;
import android.media.tv.TvContract;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.Toast;

import com.google.android.gms.location.FusedLocationProviderClient;
import com.google.android.gms.location.LocationServices;
import com.google.android.gms.tasks.OnSuccessListener;
import com.gun0912.tedpermission.PermissionListener;
import com.gun0912.tedpermission.TedPermission;

import java.util.List;

public class MainActivity extends AppCompatActivity {

    private static final String TAG = MainActivity.class.getSimpleName();
    private MainViewModel viewModel;
    private FusedLocationProviderClient fusedLocationClient;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        viewModel = new ViewModelProvider(this).get(MainViewModel.class);
        fusedLocationClient = LocationServices.getFusedLocationProviderClient(this);

        PermissionListener permissionlistener = new PermissionListener() {
            @Override
            public void onPermissionGranted() {
                performAction();
            }

            @Override
            public void onPermissionDenied(List<String> deniedPermissions) {
                Toast.makeText(MainActivity.this, "Permission Denied\n" + deniedPermissions.toString(), Toast.LENGTH_SHORT).show();
            }
        };

        TedPermission.with(this)
                .setPermissionListener(permissionlistener)
                .setDeniedMessage("zz")
                .setPermissions(Manifest.permission.ACCESS_FINE_LOCATION)
                .check();

    }

    @SuppressLint("MissingPermission")
    private void performAction() {
        fusedLocationClient.getLastLocation()
                .addOnFailureListener(this, e -> {
                    Log.e(TAG, "performAction: " + e.getCause());
                })
                .addOnSuccessListener(this, location -> {
                    Log.d(TAG, "performAction: " + location);
//                    location.setLatitude(37.4302976905);
//                    location.setLatitude(126.904908231);
//                    viewModel.location = location;
                    viewModel.fetchStoreInfo();
                });


        RecyclerView recyclerView = findViewById(R.id.recycler_view);
        recyclerView.setLayoutManager(new LinearLayoutManager(this, RecyclerView.VERTICAL, false));

        final MainAdapter adapter = new MainAdapter();
        recyclerView.setAdapter(adapter);

        viewModel.itemLiveData.observe(this, stores -> {
            adapter.updateItems(stores);
            getSupportActionBar().setTitle("마스크 재고 있는 곳 : " + stores.size());
        });

        viewModel.loadingLiveData.observe(this, isLoading -> {
            if (isLoading) findViewById(R.id.progressBar).setVisibility(View.VISIBLE);
            else findViewById(R.id.progressBar).setVisibility(View.GONE);
        });
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle item selection
        switch (item.getItemId()) {
            case R.id.action_refresh:
                viewModel.fetchStoreInfo();
                return true;
            default:
                return super.onOptionsItemSelected(item);
        }
    }


}