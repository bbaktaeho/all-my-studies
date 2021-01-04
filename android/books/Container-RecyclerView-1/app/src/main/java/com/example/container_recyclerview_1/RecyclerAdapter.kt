package com.example.container_recyclerview_1

import android.annotation.SuppressLint
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.recyclerview.widget.RecyclerView
import kotlinx.android.synthetic.main.item_recycler.view.*
import java.text.SimpleDateFormat

class RecyclerAdapter(private val listData: MutableList<Memo>) : RecyclerView.Adapter<Holder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): Holder {
//        특정 xml 파일을 개발자가 직접 클래스로 변환할 수 있음
//        LayoutInflater는 화면 요소이므로 컨텍스트가 필요하고, inflate() 메서드에 레이아웃을 지정해서 호출하면 클래스로 변환됨
        val view =
            LayoutInflater.from(parent.context).inflate(R.layout.item_recycler, parent, false)
        return Holder(view)
    }

    override fun onBindViewHolder(holder: Holder, position: Int) {
        val memo = listData[position]
        holder.setMemo(memo)
    }

    override fun getItemCount(): Int {
        return listData.size
    }
}

class Holder(itemView: View) : RecyclerView.ViewHolder(itemView) {
//    홀더 클래스가 생성되는 시점에 클릭리스너 추가
    init {
        itemView.setOnClickListener {
            Toast.makeText(
                itemView.context,
                "클릭된 것: ${itemView.txt_title.text}",
                Toast.LENGTH_SHORT
            ).show()
        }
    }

    @SuppressLint("SimpleDateFormat")
    fun setMemo(memo: Memo) {
        itemView.txt_no.text = memo.no.toString()
        itemView.txt_title.text = memo.title
        itemView.txt_date.text = SimpleDateFormat("yyyy/MM/dd").format(memo.timestamp)
    }
}