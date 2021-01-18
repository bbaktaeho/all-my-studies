package com.example.mask_java

import android.graphics.Color
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.databinding.BindingAdapter
import androidx.recyclerview.widget.RecyclerView
import com.example.mask_kotlin.R
import com.example.mask_kotlin.databinding.ItemStoreBinding
import com.example.mask_kotlin.model.Store
import java.util.*

class MainAdapter : RecyclerView.Adapter<ViewHolder>() {
    private var mItems: List<Store> = ArrayList<Store>()
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view: View =
            LayoutInflater.from(parent.context).inflate(R.layout.item_store, parent, false)
        return ViewHolder(view)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        holder.binding.store = mItems[position]
    }

    override fun getItemCount(): Int = mItems.size

    fun updateItems(items: List<Store>) {
        mItems = items
        // ui 갱신
        notifyDataSetChanged()
    }
}
// 아이템 뷰의 정보를 가지고 있는 클래스
class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
    val binding = ItemStoreBinding.bind(itemView)
}

// 함수 앞에 들어오는 매개변수는 xml의 뷰가 되고 그 다음에 오는 매개변수를 xml에서 받으면 됨
@BindingAdapter("remainStat")
fun setRemainStat(textView: TextView, store: Store) =
    when (store.remain_stat) {
        "planty" -> textView.text = "충분"
        "some" -> textView.text = "여유"
        "few" -> textView.text = "매진 임박"
        else -> textView.text = "재고 없음"
    }

@BindingAdapter("count")
fun setCount(textView: TextView, store: Store) =
    when (store.remain_stat) {
        "planty" -> textView.text = "100개 이상"
        "some" -> textView.text = "30개 이상"
        "few" -> textView.text = "2개 이상"
        else -> textView.text = "1개 이하"
    }

@BindingAdapter("color")
fun setColor(textView: TextView, store: Store) =
    when (store.remain_stat) {
        "planty" -> textView.setTextColor(Color.GREEN)
        "some" -> textView.setTextColor(Color.YELLOW)
        "few" -> textView.setTextColor(Color.RED)
        else -> textView.setTextColor(Color.GRAY)
    }