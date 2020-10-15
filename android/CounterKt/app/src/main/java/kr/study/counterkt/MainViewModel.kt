package kr.study.counterkt

import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.SavedStateHandle
import androidx.lifecycle.ViewModel

// 액티비티가 살아있을 때만 유지가 됨
// 상태 관리는 뷰모델
// handle은 자동으로 넘어옴
class MainViewModel(private val handle: SavedStateHandle) : ViewModel() {
    private var count = handle.get<Int>("count") ?: 0
        set(value) {
            countLiveData.value = count
            handle.set("count", value)
            field = value // setting 이 끝나고 재정의
        }
    val countLiveData = MutableLiveData<Int>()

    fun increaseCount() {
        count++
    }

    fun decreaseCount() {
        count--
    }
}