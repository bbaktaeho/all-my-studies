package com.example.intent_1

import android.app.Activity
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.android.synthetic.main.activity_sub.*

class SubActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_sub)

        txt_to1.text = intent.getStringExtra("from1")
        txt_to2.text = intent.getIntExtra("from2", 0).toString()

        btn_getAct.setOnClickListener {
            val returnIntent = Intent()
            returnIntent.putExtra("returnValue", edit_msg.text.toString())
            setResult(Activity.RESULT_OK, returnIntent)
            finish()
        }
    }
}