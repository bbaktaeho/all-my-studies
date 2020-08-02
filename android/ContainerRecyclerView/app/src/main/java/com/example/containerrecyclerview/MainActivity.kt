package com.example.containerrecyclerview

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.LinearLayoutManager
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        fun loadData(): MutableList<Memo> {
            val data:MutableList<Memo> = mutableListOf()
            for (num in 1..100) {
                val title = "안녕하세유? $num"
                val date = System.currentTimeMillis()
                data.add(Memo(num, title, date))
            }
            return data
        }
        val data: MutableList<Memo> = loadData()
        val adapter = CustomAdapter()
        adapter.listData = data
        recyclerView.adapter = adapter

        // 리사이클러뷰를 화면에 보여주는 형태를 결정하는 레이아웃 매니저
        recyclerView.layoutManager = LinearLayoutManager(this)
    }

}