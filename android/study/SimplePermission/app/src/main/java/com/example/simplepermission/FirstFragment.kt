package com.example.simplepermission

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.activity.result.contract.ActivityResultContracts
import androidx.navigation.Navigation
import androidx.navigation.fragment.findNavController
import kotlinx.android.synthetic.main.fragment_first.*
import java.util.jar.Manifest


class FirstFragment : Fragment(R.layout.fragment_first) {
    val requestPermission = registerForActivityResult(
        ActivityResultContracts.RequestMultiplePermissions()
    ) {
        map ->
        if (map[android.Manifest.permission.ACCESS_FINE_LOCATION]!!) {
            Toast.makeText(requireContext(), "ACCESS_FINE 성공", Toast.LENGTH_SHORT).show()
        }
        if (map[android.Manifest.permission.ACCESS_COARSE_LOCATION]!!) {
            Toast.makeText(requireContext(), "ACCESS_COARSE 성공", Toast.LENGTH_SHORT).show()
        }
        if (map[android.Manifest.permission.ADD_VOICEMAIL]!!) {
            Toast.makeText(requireContext(), "ADD_VOICEMAIL 성공", Toast.LENGTH_SHORT).show()
        }
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        btn_first.setOnClickListener {
        }

        btn_image.setOnClickListener {
            // 위치 정보 요청
            requestPermission.launch(arrayOf(
                android.Manifest.permission.ACCESS_FINE_LOCATION,
                android.Manifest.permission.ACCESS_COARSE_LOCATION,
            ))
        }
    }
}