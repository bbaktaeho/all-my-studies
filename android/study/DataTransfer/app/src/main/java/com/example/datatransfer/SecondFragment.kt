package com.example.datatransfer

import android.os.Bundle
import android.view.View
import android.widget.Toast
import androidx.core.os.bundleOf
import androidx.fragment.app.Fragment
import androidx.fragment.app.activityViewModels
import androidx.fragment.app.setFragmentResult
import androidx.fragment.app.setFragmentResultListener
import androidx.navigation.fragment.findNavController
import kotlinx.android.synthetic.main.fragment_first.*
import kotlinx.android.synthetic.main.fragment_first.button
import kotlinx.android.synthetic.main.fragment_second.*

class SecondFragment : Fragment(R.layout.fragment_second) {
//    val mainViewModel by activityViewModels<MainViewModel>()

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

//        Toast.makeText(requireContext(), mainViewModel.data, Toast.LENGTH_SHORT).show()

        setFragmentResultListener("requestKey") { key, bundle ->
            val data = bundle.getString("data", "")
            Toast.makeText(requireContext(), data, Toast.LENGTH_SHORT).show()
        }

        button2.setOnClickListener {
            setFragmentResult("requestKey", bundleOf("data" to "hello"))
            // 네비게이션 호스트에서 네비게이션 호스트로 화면 전환을 가능하게 한다.
            // 네비게이션 호스트에서 네비게이션 호스트로 화면 전환을 가능하게 한다.
            findNavController().navigate(R.id.action_secondFragment_to_firstFragment)
        }
    }
}