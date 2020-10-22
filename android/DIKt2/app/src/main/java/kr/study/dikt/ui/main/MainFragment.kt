package kr.study.dikt.ui.main

import android.content.Intent
import android.os.Bundle
import android.util.Log
import androidx.fragment.app.Fragment
import android.view.View
import androidx.fragment.app.activityViewModels
import androidx.fragment.app.viewModels
import androidx.navigation.fragment.findNavController
import dagger.hilt.android.AndroidEntryPoint
import kotlinx.android.synthetic.main.fragment_main.*
import kr.study.dikt.R
import kr.study.dikt.data.MyRepository
import kr.study.dikt.di.qualifier.ActivityHash
import kr.study.dikt.di.qualifier.AppHash
import kr.study.dikt.ui.second.SecondActivity
import javax.inject.Inject


@AndroidEntryPoint
class MainFragment : Fragment(R.layout.fragment_main) {
    // 엑티비티 뷰모델을 쓰면 프래그먼트를 포함하는 액티비티 라이프사이클이 관리하고 있는 뷰 모델이 됨
    private val activityViewModel by activityViewModels<MainViewModel>()
    private val viewModel by viewModels<MainViewModel>()

    @Inject
    lateinit var repository: MyRepository

    @AppHash
    @Inject
    lateinit var applicationHash: String

    @ActivityHash
    @Inject
    lateinit var activityHash: String

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        btn_activity.setOnClickListener {
            val i = Intent(requireContext(), SecondActivity::class.java)
            startActivity(i)
        }
        btn_fragment.setOnClickListener {
            findNavController().navigate(R.id.action_mainFragment_to_secondFragment);
        }
        Log.d("MainFragment", applicationHash)
        Log.d("MainFragment", activityHash)
        Log.d("MainFragment", "viewModel: ${viewModel.getRepositoryHash()}")
        Log.d("MainFragment", "activityViewModel: ${activityViewModel.getRepositoryHash()}")
    }
}