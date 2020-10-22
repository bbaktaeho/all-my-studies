package kr.study.dikt.ui.second

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import dagger.hilt.android.AndroidEntryPoint
import kr.study.dikt.R
import kr.study.dikt.data.MyRepository
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