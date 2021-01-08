package com.example.hilt_1.ui.second

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.hilt_1.R
import com.example.hilt_1.data.MyRepository
import dagger.hilt.android.AndroidEntryPoint
import javax.inject.Inject

@AndroidEntryPoint
class SecondActivity : AppCompatActivity() {

    @Inject
    lateinit var repository: MyRepository

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_second)
    }
}