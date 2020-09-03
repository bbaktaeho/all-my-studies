package com.example.ch1_room

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import androidx.databinding.DataBindingUtil
import androidx.databinding.library.baseAdapters.DataBinderMapperImpl
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProvider
import androidx.lifecycle.lifecycleScope
import androidx.room.Room
import com.example.ch1_room.databinding.ActivityMainBinding

import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // 데이터 바인딩하기
        val binding = DataBindingUtil.setContentView<ActivityMainBinding>(this, R.layout.activity_main)

        // 라이브 데이터를 활용하기 위해서 적용
        // 라이브 데이터 관찰
        binding.lifecycleOwner = this

        val viewModel = ViewModelProvider(this, ViewModelProvider.AndroidViewModelFactory(application)).get(MainViewModel::class.java)
        binding.viewModel = viewModel

//        viewModel.getAll().observe(this, Observer { todos ->
//            todo_text.text = todos.toString()
//        })

//        todo_add.setOnClickListener {
//            lifecycleScope.launch(Dispatchers.IO) {
//                viewModel.insert(todo_edit.text.toString())
//
//            }
//        }

    }
}