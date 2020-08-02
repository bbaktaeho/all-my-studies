package com.example.intenttest

import android.app.Activity
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_sub.*

class SubActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_sub)

        to1.text = intent.getStringExtra("from1")
        to2.text = intent.getStringExtra("from2")

        close_button.setOnClickListener {
            val returnIntent = Intent()
            returnIntent.putExtra("return1", sub_edit.text.toString())

            // 호춣한 액티비티 측으로 다시 전달해주는 메서드
            setResult(Activity.RESULT_OK, returnIntent)
            finish()
        }
    }
}