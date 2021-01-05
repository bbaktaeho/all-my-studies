package com.example.fragment_1

import android.content.Context
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import kotlinx.android.synthetic.main.fragment_list.view.*

class ListFragment : Fragment() {
    private var mainActivity: MainActivity? = null

    override fun onAttach(context: Context) {
        super.onAttach(context)
        mainActivity = context as MainActivity
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        val message = arguments?.getString("key")
        Toast.makeText(mainActivity, message, Toast.LENGTH_LONG).show()

        val view = inflater.inflate(R.layout.fragment_list, container, false)
        view.btn_next.setOnClickListener { mainActivity?.goDetail() }
        return view
    }
}