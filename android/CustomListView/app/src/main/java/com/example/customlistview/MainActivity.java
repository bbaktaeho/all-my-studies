package com.example.customlistview;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

// 커스텀 리스트뷰
// 1. 앱 화면 그려보기
// 2. 아이템 레이아웃 구성하기
// 3. 커스텀 어댑터 구현 (BaseAdapter 상속)
public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

    }
}