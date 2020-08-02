package com.example.progressbar

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import kotlinx.android.synthetic.main.activity_main.*
import kotlin.concurrent.thread

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        thread(start=true) {
            Thread.sleep(3000) // 코드 실행을 잠깐 정지시키는 함수 Thread.sleep
            runOnUiThread { // 메인스레드가 다시 그려주도록 함
                showProgress(false)
            }
        }
    }

    fun showProgress(show: Boolean) {
        if (show) progressLayout.visibility = View.VISIBLE // 화면에 나타남
        else progressLayout.visibility = View.GONE // 화면에서 사라짐
    }
}