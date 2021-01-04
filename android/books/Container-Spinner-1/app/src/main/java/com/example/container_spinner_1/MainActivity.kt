package com.example.container_spinner_1

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.AdapterView
import android.widget.ArrayAdapter
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val data = listOf("- 선택하세요 -", "1월", "2월", "3월", "4월")
        val adapter = ArrayAdapter<String>(this, android.R.layout.simple_list_item_1, data)
        spinner.adapter = adapter

        spinner.onItemSelectedListener = object: AdapterView.OnItemSelectedListener {
            // 3번 째 매개변수가 사용자가 스피너에서 선택을 하면 몇 번째 아이템인지 알려주는 매개변수 입니다.
            override fun onItemSelected(p0: AdapterView<*>?, p1: View?, position: Int, p3: Long) {
                txt_result.text = data[position]
            }

            override fun onNothingSelected(p0: AdapterView<*>?) {
            }
        }
    }
}