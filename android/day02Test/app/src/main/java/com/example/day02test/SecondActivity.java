package com.example.day02test;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class SecondActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);

        final TextView textView2 = findViewById(R.id.textView2);
        final Button btnCheck = findViewById(R.id.btn_check);
        Intent i = getIntent();
        final String data = i.getStringExtra("key");

        btnCheck.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                textView2.setText(data);
            }
        });

    }
}