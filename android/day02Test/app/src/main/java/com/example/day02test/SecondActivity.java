package com.example.day02test;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.widget.TextView;

public class SecondActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);

        TextView textView2 = findViewById(R.id.textView2);

        Intent i = getIntent();
        String data = i.getStringExtra("key");

        textView2.setText(data);
    }
}