package com.example.viewpager_1

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.RecyclerView
import com.google.android.material.tabs.TabLayout
import com.google.android.material.tabs.TabLayoutMediator
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {
    private val tabTextList = listOf("one", "two", "three", "four")

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        init()
    }

    fun init() {
        val adapter = FragmentAdapter(this)
        adapter.addFragment(OneFragment())
        adapter.addFragment(TwoFragment())
        adapter.addFragment(ThreeFragment())
        adapter.addFragment(FourFragment())
        viewPager.adapter = adapter
        TabLayoutMediator(tabLayout, viewPager) {
            tab, position ->
            tab.text = tabTextList[position]
        }.attach()
    }
}