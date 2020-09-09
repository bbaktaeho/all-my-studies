package com.example.day02;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class SecondActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);

        Button add = findViewById(R.id.btn_add);
        Button go_to = findViewById(R.id.btn_goto);
        final TextView tv = findViewById(R.id.txt_result);
        final EditText edit_first = findViewById(R.id.edit_first);
        final EditText edit_second = findViewById(R.id.edit_second);

        go_to.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent i = new Intent(SecondActivity.this, LayoutActivity.class);
                i.putExtra("key", "hi");
                startActivity(i);
                finish();
            }
        });

        add.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String num1 = edit_first.getText().toString();
                String num2 = edit_second.getText().toString();

                int num_1 = Integer.parseInt(num1);
                int num_2 = Integer.parseInt(num2);

                tv.setText(num_1 + num_2 + "");
            }
        });
    }
}