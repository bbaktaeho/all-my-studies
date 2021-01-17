package com.example.mask_java

import android.graphics.Color
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.mask_kotlin.R
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
        val store: Store = mItems[position]
        holder.nameTextView.text = store.name
        holder.addressTextView.text = store.addr
        holder.distanceTextView.text = "1.0km"
        var remainStat = "충분"
        var count = "100개 이상"
        var color = Color.GREEN
        when (store.remain_stat) {
            "planty" -> {
                count = "100개 이상"
                remainStat = "충분"
                color = Color.GREEN
            }
            "some" -> {
                count = "30개 이상"
                remainStat = "여유"
                color = Color.YELLOW
            }
            "few" -> {
                count = "2개 이상"
                remainStat = "매진 임박"
                color = Color.RED
            }
            "empty" -> {
                count = "1개 이하"
                remainStat = "재고 없음"
                color = Color.GRAY
            }
            else -> {
            }
        }
        holder.remainTextView.text = remainStat
        holder.countTextView.text = count
        holder.remainTextView.setTextColor(color)
        holder.countTextView.setTextColor(color)
    }

    override fun getItemCount(): Int  = mItems.size

    fun updateItems(items: List<Store>) {
        mItems = items
        // ui 갱신
        notifyDataSetChanged()
    }
} // 아이템 뷰의 정보를 가지고 있는 클래스

class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
    var nameTextView: TextView = itemView.findViewById(R.id.txt_name)
    var addressTextView: TextView = itemView.findViewById(R.id.txt_addr)
    var distanceTextView: TextView = itemView.findViewById(R.id.txt_distance)
    var remainTextView: TextView = itemView.findViewById(R.id.txt_remain)
    var countTextView: TextView = itemView.findViewById(R.id.txt_count)
}