package com.example.radiobar

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import kotlinx.android.synthetic.main.activity_progress_bar.*
import kotlin.concurrent.thread

class ProgressBarActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_progress_bar)

        thread {
            var i = 0

            while (true) {
                Thread.sleep(1000)
                runOnUiThread {
                    progress_text.text = "${i++}"
                }
            }
        }
    }
}