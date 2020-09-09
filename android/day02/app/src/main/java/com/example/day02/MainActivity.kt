package com.example.day02

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.widget.Button
import androidx.appcompat.app.AppCompatActivity

/*
* Intent
* - 액티비티 간의 전환, 값 전달
* - 특정 사이트로 링크를 연결해줄 때
* - startActivity(intent)
* - 출발지는 클래스 명을 기술할 수 있고, this(일반적)
*
* Layout
* - LinearLayout
* - RelativeLayout
* - FrameLayout
* - TableLayout
* */
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val btn_intent = findViewById<Button>(R.id.btn_intent)
        btn_intent.setOnClickListener {
            startActivity(Intent(this@MainActivity, SecondActivity::class.java)) // 이 클래스파일이 자바 클래스라는 것을 알림
            finish() // this 액티비티를 꺼야함
        }

        val btn_link = findViewById<Button>(R.id.btn_link)
        btn_link.setOnClickListener {
            startActivity(Intent(Intent.ACTION_VIEW, Uri.parse("http://www.naver.com")))
        }
    }
}