package com.example.github_api.ui.main

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.fragment.app.viewModels
import androidx.lifecycle.Observer
import com.example.github_api.R
import com.example.github_api.model.ResultData
import com.example.github_api.ui.main.adapter.RepositoriesAdapter
import dagger.hilt.android.AndroidEntryPoint
import kotlinx.android.synthetic.main.fragment_main.*

@AndroidEntryPoint
class MainFragment : Fragment() {
    companion object {
        fun newInstance() = MainFragment()
    }
    private val mainViewModel by viewModels<MainViewModel>()

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_main, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        val repositoriesAdapter = RepositoriesAdapter()
        recycler_repositories.adapter = repositoriesAdapter

        val repositoriesList = mainViewModel.getRepositoriesList()
        repositoriesList.observe(viewLifecycleOwner, Observer { resultData ->
            when (resultData) {
                is ResultData.Loading -> {
                    loading.visibility = View.VISIBLE
                }
                is ResultData.Success -> {
                    loading.visibility = View.GONE

                    val githubDataModel = resultData.data
                    repositoriesAdapter.submitList(githubDataModel)
                   Toast.makeText(context, "성공", Toast.LENGTH_SHORT).show()
                }
                is ResultData.Failed -> {
                    loading.visibility = View.GONE

                }
                is ResultData.Exception -> {
                    loading.visibility = View.GONE

                }
            }

        })
    }

}