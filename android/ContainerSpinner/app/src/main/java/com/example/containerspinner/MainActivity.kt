package com.example.containerspinner

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

        // 가상의 데이터
        val data = listOf("--선택하세요--", "1월","2월","3월","4월","5월","6월","7월")

        // 데이터와 스피너를 연결해줄 ArrayAdapter 클래스 생성
        // ArrayAdapter의 파라미터는 스피너를 그리기 위한 컨텍스트, 목록 하나하나가 그려질 레이아웃, 필요한 데이터
        // simple_list_item1 은 기본으로 제공하는 레이아웃, 텍스트뷰 한 개만 가지고있는 특수한 레이아웃
       val adapter = ArrayAdapter<String>(this, android.R.layout.simple_list_item_1, data)
        spinner.adapter = adapter
        spinner.onItemSelectedListener = object : AdapterView.OnItemSelectedListener {
            override fun onNothingSelected(p0: AdapterView<*>?) {
            }

            override fun onItemSelected(p0: AdapterView<*>?, view: View?, position: Int, id: Long) {
                result_text.text = data[position]
            }
        }
    }
}