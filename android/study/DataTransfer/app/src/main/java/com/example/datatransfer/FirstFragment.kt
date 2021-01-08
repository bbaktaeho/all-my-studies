package com.example.datatransfer

import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.view.View
import android.widget.Toast
import androidx.activity.result.contract.ActivityResultContracts
import androidx.core.os.bundleOf
import androidx.fragment.app.*
import androidx.navigation.fragment.findNavController
import kotlinx.android.synthetic.main.fragment_first.*

class FirstFragment : Fragment(R.layout.fragment_first) {
    // 이렇게 쓰면 틀린 것...
    // 왜냐하면 이 프래그먼트의 라이프사이클에 맞는 메인뷰모델이 생성이 되어버림
    // 즉, 이 화면이 넘어가면 뷰모델을 파괴!
//    val mainViewModel by viewModels<MainViewModel>()

    // 액티비티가 주인인 뷰모델을 쓰려면
//    val mainViewModel by activityViewModels<MainViewModel>()

    //
    val getContent = registerForActivityResult(ActivityResultContracts.GetContent()) {
        imageView.setImageURI(it)
    }
    val getStartActivityForResult = registerForActivityResult(
        ActivityResultContracts.StartActivityForResult()
    ) {
        it.data?.let { data ->
            data.extras?.let { bundle ->
                Toast.makeText(
                    requireContext(),
                    bundle.getString("data", "world"),
                    Toast.LENGTH_SHORT
                ).show()
            }
        }
    }


    // 화면이 만들어진 다음에 동작하는 메소드
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

//        프래그먼트리절트 api
//        setFragmentResultListener("requestKey") { key, bundle ->
//            val data = bundle.getString("data", "")
//            Toast.makeText(requireContext(), data, Toast.LENGTH_SHORT).show()
//        }

        button.setOnClickListener {
//            여기는 프래그먼트리절트 api 사용한 것
//            // 데이터를 보내는 부분
//            setFragmentResult("requestKey", bundleOf("data" to "hello"))
//            // 네비게이션 호스트에서 네비게이션 호스트로 화면 전환을 가능하게 한다.
//            findNavController().navigate(R.id.action_firstFragment_to_secondFragment)

//
//            getContent.launch("image/*")

            Intent(requireContext(), ResultActivity::class.java).apply {
                getStartActivityForResult.launch(this)
            }
        }
    }
}