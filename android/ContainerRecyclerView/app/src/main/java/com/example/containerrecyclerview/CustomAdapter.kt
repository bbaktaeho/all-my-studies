package com.example.containerrecyclerview

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import kotlinx.android.synthetic.main.item_recycler.view.*
import java.text.SimpleDateFormat

class CustomAdapter: RecyclerView.Adapter<Holder>() {
    var listData = mutableListOf<Memo>()

    // 보여지는 개수만큼 이 메서드가 호출됨
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): Holder {
        // inflate?
        // (resource, root, attachToRoot) -> (view로 생성할 레이아웃 파일명, attachtoRoot에 따라 root의 역할이 결정, false일 경우 View의 최상위 레이아웃의 속성을 기본으로 레이아웃이 적용)
        val view = LayoutInflater.from(parent.context).inflate(R.layout.item_recycler, parent, false)
        return Holder(view)
    }

    // 리사이클러뷰에서 사용할 데이터의 총 개수를 리턴하는 메서드
    override fun getItemCount(): Int {
        return listData.size
    }

    // 스크롤이 될 때마다 실제 화면에 데이터와 레이아웃을 연결하는 메서드
    override fun onBindViewHolder(holder: Holder, position: Int) {
        val memo = listData[position]
        holder.setMemo(memo)
    }
}

// 아이템뷰는 뷰홀더 자체에서 만들어주는게 아니므로 어댑터가 만들어서 넘겨줘야함
class Holder(itemView: View):RecyclerView.ViewHolder(itemView) {
    fun setMemo(memo: Memo) {
        itemView.number_text.text = "${memo.num}"
        itemView.title_text.text = memo.title

        var sdf = SimpleDateFormat("yyyy/MM/dd")
        var formattedDate = sdf.format(memo.timestamp)
        itemView.date_text.text = formattedDate
    }
}