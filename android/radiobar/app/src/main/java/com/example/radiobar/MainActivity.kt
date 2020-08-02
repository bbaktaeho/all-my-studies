package com.example.radiobar

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        radioGroup.setOnCheckedChangeListener { radioGroup, i ->
            when(i) {
                R.id.radio_apple -> textView.text = "${radio_apple.text}"
                R.id.radio_banana -> textView.text = "${radio_banana.text}"
                R.id.radio_orenge -> textView.text = "${radio_orenge.text}"
            }
        }
    }
}