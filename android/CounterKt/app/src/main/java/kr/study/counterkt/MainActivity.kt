package kr.study.counterkt

import android.app.Activity
import android.app.Application
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.os.PersistableBundle
import android.util.Log
import androidx.activity.viewModels
import androidx.databinding.DataBindingUtil
import androidx.lifecycle.Observer
import kotlinx.android.synthetic.main.activity_main.*
import kr.study.counterkt.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    private val viewModel by viewModels<MainViewModel>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
//        setContentView(R.layout.activity_main) // 바인딩이 해주고있음
        val binding = DataBindingUtil.setContentView<ActivityMainBinding>(this, R.layout.activity_main)

        binding.viewModel = viewModel
        // 메인액티비티 라이플사이클에 맞춰서 동작하겠다라는 뜻
        binding.lifecycleOwner = this

//        viewModel.countLiveData.observe(this, Observer {
//            count -> text_counter.text = "$count"
//        })

        btn_plus.setOnClickListener {
            viewModel.increaseCount()
        }

        btn_minus.setOnClickListener {
            viewModel.decreaseCount()
        }

        // 높은 버전에서만 사용 가능한 메서드
        registerActivityLifecycleCallbacks(object : Application.ActivityLifecycleCallbacks {
            override fun onActivityCreated(p0: Activity, p1: Bundle?) {
                Log.d(TAG, "onActivityCreated: ")
            }

            override fun onActivityStarted(p0: Activity) {
                Log.d(TAG, "onActivityStarted: ")
            }

            override fun onActivityResumed(p0: Activity) {
                Log.d(TAG, "onActivityResumed: ")
            }

            override fun onActivityPaused(p0: Activity) {
                Log.d(TAG, "onActivityPaused: ")
            }

            override fun onActivityStopped(p0: Activity) {
                Log.d(TAG, "onActivityStopped: ")
            }

            override fun onActivitySaveInstanceState(p0: Activity, p1: Bundle) {
                Log.d(TAG, "onActivitySaveInstanceState: ")
            }

            override fun onActivityDestroyed(p0: Activity) {
                Log.d(TAG, "onActivityDestroyed: ")
            }

        })
    }

//    override fun onSaveInstanceState(outState: Bundle) {
//        super.onSaveInstanceState(outState)
//        outState.putInt("count", viewModel.)
//    }
//
//    // 받아서 복원하는 메서드
//    override fun onRestoreInstanceState(savedInstanceState: Bundle) {
//        super.onRestoreInstanceState(savedInstanceState)
//        viewModel.count = savedInstanceState.getInt("count")
//    }

    companion object {
        val TAG = MainActivity::class.java.simpleName
    }
}