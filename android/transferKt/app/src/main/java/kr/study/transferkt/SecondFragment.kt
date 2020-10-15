package kr.study.transferkt

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.core.os.bundleOf
import androidx.fragment.app.activityViewModels
import androidx.fragment.app.setFragmentResult
import androidx.fragment.app.setFragmentResultListener
import androidx.navigation.fragment.findNavController
import kotlinx.android.synthetic.main.fragment_first.*


class SecondFragment : Fragment(R.layout.fragment_second) {
    val mainViewModel by activityViewModels<MainViewModel>()

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        // 다른 액티비티에서 데이터 받는 방법 (startActivityForResult, onActivityResult)


//        // 데이터 받는 함수
//        setFragmentResultListener("requestKey") { resultKey, bundle ->
//            val data = bundle.getString("data", "")
//            Toast.makeText(requireContext(), data, Toast.LENGTH_SHORT).show()
//        }

        button.setOnClickListener {

//            setFragmentResult("requestKey", bundleOf("data" to "hello1"))
//            // 네비찾기
//            findNavController().navigate(R.id.action_secondFragment_to_firstFragment)
        }
    }
}