package kr.study.transferkt

import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.activity.result.contract.ActivityResultContracts
import androidx.core.os.bundleOf
import androidx.fragment.app.*
import androidx.navigation.fragment.findNavController
import kotlinx.android.synthetic.main.fragment_first.*

// TODO: Rename parameter arguments, choose names that match
// the fragment initialization parameters, e.g. ARG_ITEM_NUMBER

class FirstFragment : Fragment(R.layout.fragment_first) {
    //    val mainViewModel by activityViewModels<MainViewModel>()
    val getContent = registerForActivityResult(ActivityResultContracts.GetContent()) {
        imageView.setImageURI(it)
    }

    val getStartActivityForResult = registerForActivityResult(
        ActivityResultContracts.StartActivityForResult()
    ) { activityResult ->
        activityResult.data?.let {
            it.extras?.let { bundle ->
                Log.d("FirstFragment", "result: ${bundle.getString("data", "world")}")
            }
        }
    }

    // 화면이 다 그려진 다음 동작하는 코드
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        button.setOnClickListener {
            Intent(requireContext(), ResultActivity::class.java).apply {
                getStartActivityForResult.launch(this)
            }
        }
        // 프레그먼트간 데이터 받는 곳
//        setFragmentResultListener("requestKey") { resultKey, bundle ->
//            val data = bundle.getString("data", "")
//            Toast.makeText(requireContext(), data, Toast.LENGTH_SHORT).show()
//        }

//        button.setOnClickListener {
//            // mime type
//            getContent.launch("image/*")
//
//            // 프래그먼트간 데이터 보내는 곳
////            setFragmentResult("requestKey", bundleOf("data" to "hello"))
//
//            // 네비찾기
////            findNavController().navigate(R.id.action_firstFragment_to_secondFragment)
//        }
    }
}