package com.example.cadi_customlistview

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.View
import android.widget.AdapterView
import android.widget.Toast
import androidx.core.content.ContextCompat
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.android.synthetic.main.custom_list_item.view.*

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        val items = mutableListOf<ListViewItem>()

        items.add(ListViewItem(ContextCompat.getDrawable(this, R.drawable.instagram)!!, "인스타그램", "인스타그램 입니다"))
        items.add(ListViewItem(ContextCompat.getDrawable(this, R.drawable.facebook)!!, "페이스북", "페이스북 입니다"))
        items.add(ListViewItem(ContextCompat.getDrawable(this, R.drawable.youtube)!!, "유튜브", "유튜브 입니다"))

        val adapter = ListViewAdapter(items)
        listView.adapter = adapter

        listView.setOnItemClickListener { parent: AdapterView<*>, view: View, position: Int, id: Long ->
            val item = parent.getItemAtPosition(position) as ListViewItem
            Toast.makeText(this, item.title, Toast.LENGTH_SHORT).show()
        }
    }
}