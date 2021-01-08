package com.example.datatransfer

import android.app.Activity
import android.app.Activity.RESULT_OK
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.core.os.bundleOf
import kotlinx.android.synthetic.main.activity_result.*

class ResultActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_result)

        button3.setOnClickListener {
            val i = Intent()
            i.putExtra("data", "bbak")
            setResult(Activity.RESULT_OK, i)
//            finish()
        }
    }
}