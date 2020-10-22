package kr.study.dikt.ui.main

import android.os.Bundle
import android.util.Log
import androidx.fragment.app.Fragment
import android.view.View
import androidx.fragment.app.viewModels
import androidx.navigation.fragment.findNavController
import dagger.hilt.android.AndroidEntryPoint
import kotlinx.android.synthetic.main.fragment_second.*
import kr.study.dikt.R
import kr.study.dikt.data.MyRepository
import kr.study.dikt.di.qualifier.ActivityHash
import kr.study.dikt.di.qualifier.AppHash
import javax.inject.Inject

@AndroidEntryPoint
class SecondFragment : Fragment(R.layout.fragment_second) {
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

        button.setOnClickListener {
            findNavController().navigate(R.id.action_secondFragment_to_mainFragment)
        }

        Log.d("SecondFragment", applicationHash)
        Log.d("SecondFragment", activityHash)
        Log.d("SecondFragment", "viewModel: ${viewModel.getRepositoryHash()}")
    }
}