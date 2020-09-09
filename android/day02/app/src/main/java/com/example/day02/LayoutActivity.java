package com.example.day02;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Toast;

public class LayoutActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_layout);

        Intent j = getIntent();
        String test = j.getStringExtra("key");
        Toast.makeText(getApplicationContext(), test, Toast.LENGTH_SHORT).show();
    }
}