package com.example.radiobar

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.CompoundButton
import kotlinx.android.synthetic.main.activity_check.*

class CheckActivity : AppCompatActivity() {
    val list = mutableListOf<String>()
    val listener = CompoundButton.OnCheckedChangeListener { component, isClicked ->
        if (isClicked) {
            when (component.id) {
                R.id.check_one -> list.add(check_one.text.toString())
                R.id.check_two -> list.add(check_two.text.toString())
                R.id.check_three -> list.add(check_three.text.toString())
                R.id.check_four -> list.add(check_four.text.toString())
            }
        }else {
            when (component.id) {
                R.id.check_one -> list.remove(check_one.text.toString())
                R.id.check_two -> list.remove(check_two.text.toString())
                R.id.check_three -> list.remove(check_three.text.toString())
                R.id.check_four -> list.remove(check_four.text.toString())
            }
        }
        Log.d("isChecked", list.toList().toString())
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_check)

        check_one.setOnCheckedChangeListener(listener)
        check_two.setOnCheckedChangeListener(listener)
        check_three.setOnCheckedChangeListener(listener)
        check_four.setOnCheckedChangeListener(listener)
    }
}