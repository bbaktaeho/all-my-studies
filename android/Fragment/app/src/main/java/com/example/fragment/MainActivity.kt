package com.example.fragment

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        setFragment()
    }

    fun goDetail() {
        val detailFragment: DetailFragment = DetailFragment()
        val transaction = supportFragmentManager.beginTransaction()
        transaction.add(R.id.frameLayout, detailFragment)
        // 스마트폰의 뒤로가기 버튼을 사용할 수 있다는 말
        transaction.addToBackStack("detail")
        transaction.commit()
    }

    fun goBack() {
        onBackPressed()
    }

    fun setFragment() {
        val listFragment: ListFragment = ListFragment()
        val transaction = supportFragmentManager.beginTransaction()
        // frameLayout 에 listFragment 를 삽입
        transaction.add(R.id.frameLayout, listFragment)
        // replace(레이아웃, 프래그먼트) -> 레이아웃에 삽입되어 있는 프래그먼트 교체
        // remove(프래그먼트) -> 지정한 프래그먼트 교체
        transaction.commit()
    }
}