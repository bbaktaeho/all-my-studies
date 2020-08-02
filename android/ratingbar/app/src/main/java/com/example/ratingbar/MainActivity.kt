package com.example.ratingbar

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        ratingBar.setOnRatingBarChangeListener { ratingBar, rating, fromUser ->
            textView.text = "$rating"
        }
    }
}