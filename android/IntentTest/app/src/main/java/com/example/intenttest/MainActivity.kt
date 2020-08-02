package com.example.intenttest

import android.annotation.SuppressLint
import android.app.Activity
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val intent = Intent(this, SubActivity::class.java)
        intent.putExtra("from1", "hello bundle")
        intent.putExtra("from2", "2020")
        button.setOnClickListener {
            // startActivity 로 실행된 액티비티에서는 값을 돌려받을 수 없음
            startActivityForResult(intent, 99)
        }
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        if(resultCode == Activity.RESULT_OK) {
            when (requestCode) {
                   99 ->  {
                       val message = data?.getStringExtra("return1") ?: "아무것도 안왔단다"
                        Toast.makeText(this, message, Toast.LENGTH_SHORT).show()
                   }
            }
        }
    }
}
