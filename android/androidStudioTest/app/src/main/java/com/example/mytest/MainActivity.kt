package com.example.mytest

import android.annotation.SuppressLint
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    @SuppressLint("SetTextI18n")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
//        setContentView(R.layout.activity_main)
//        setContentView(R.layout.activity_chaining)
        setContentView(R.layout.activity_scroll_view)

//        btnSay.setOnClickListener {
//            textSay.text = "Hello Kotlin!!"
//        }
    }
}