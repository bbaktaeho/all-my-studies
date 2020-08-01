package com.example.book

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.CompoundButton
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    private val listener = CompoundButton.OnCheckedChangeListener { buttonView, isChecked ->
        if (isChecked) {
            when (buttonView.id) {
                R.id.checkApple -> Log.d("CheckBox", checkApple.text.toString() + "선택")
                R.id.checkBanana -> Log.d("CheckBox", checkBanana.text.toString() + "선택")
                R.id.checkOrenge -> Log.d("CheckBox", checkOrenge.text.toString() + "선택")
            }
        }else {
            when (buttonView.id) {
                R.id.checkApple -> Log.d("CheckBox", checkApple.text.toString() + "취소")
                R.id.checkBanana -> Log.d("CheckBox", checkBanana.text.toString() + "취소")
                R.id.checkOrenge -> Log.d("CheckBox", checkOrenge.text.toString() + "취소")
            }
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        checkApple.setOnCheckedChangeListener(listener)
        checkBanana.setOnCheckedChangeListener(listener)
        checkOrenge.setOnCheckedChangeListener(listener)
//        radioGroup.setOnCheckedChangeListener { group, checkId ->
//            when(checkId) {
//                R.id.radio_1 -> Log.d("RADIOBUTTON_1", "사과 눌림")
//                R.id.radio_2 -> Log.d("RADIOBUTTON_2", radio_2.text.toString() + " 눌림")
//                R.id.radio_3 -> Log.d("RADIOBUTTON_3", radio_3.text.toString() + " 눌림")
//            }
//        }
    }
}