package com.example.fragment

import android.content.Context
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import kotlinx.android.synthetic.main.fragment_list.view.*


class ListFragment : Fragment() {
    var mainActivity: MainActivity? = null

    // 프래그먼트의 생명 주기 메서드
    // 넘어오는 Context 는 부모 액티비티 전체가 담겨있음
    override fun onAttach(context: Context) {
        super.onAttach(context)

        mainActivity = context as MainActivity
    }

    // 리사이클러뷰의 onCreateViewHolder 처럼 동작하는 메서드임
    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
//        return inflater.inflate(R.layout.fragment_list, container, false)
        val view = inflater!!.inflate(R.layout.fragment_list, container, false)
        view.next_button.setOnClickListener { mainActivity?.goDetail() }
        return view
    }
}