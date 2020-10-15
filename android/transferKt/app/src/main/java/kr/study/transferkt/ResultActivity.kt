package kr.study.transferkt

import android.app.Activity
import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.core.os.bundleOf
import kotlinx.android.synthetic.main.activity_result.*
import kotlinx.android.synthetic.main.fragment_first.button

class ResultActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_result)

        button.setOnClickListener {
            val intent = Intent()
            intent.putExtra("data", "Hello~")
            setResult(Activity.RESULT_OK, intent)
        }
    }
}