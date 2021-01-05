package com.example.fragment_1

import android.content.Context
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import kotlinx.android.synthetic.main.fragment_detail.view.*

class DetailFragment : Fragment() {
    private var mainActivity: MainActivity? = null
    private var value = ""

    override fun onAttach(context: Context) {
        super.onAttach(context)
        mainActivity = context as MainActivity
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        Toast.makeText(mainActivity, value.toString(), Toast.LENGTH_SHORT).show()
        val view = inflater.inflate(R.layout.fragment_detail, container, false)
        view.btn_back.setOnClickListener { mainActivity?.goBack() }
        // Inflate the layout for this fragment
        return view
    }

    fun setValue(value: String) {
        this.value = value
    }
}