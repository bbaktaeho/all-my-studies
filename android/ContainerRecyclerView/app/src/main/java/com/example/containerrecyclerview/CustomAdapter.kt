package com.example.containerrecyclerview

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.recyclerview.widget.RecyclerView
import kotlinx.android.synthetic.main.item_recycler.view.*
import java.text.SimpleDateFormat

// 리사이클러뷰의 어댑터를 상속받아 어댑터를 구현함
// 상속할 때 제네릭 타입으로 홀더를 지정해줘야함
class CustomAdapter: RecyclerView.Adapter<Holder>() {
    var listData = mutableListOf<Memo>()

    // 화면에 보여지는 아이템 개수만큼 이 메서드가 호출되어 레이아웃 생성
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): Holder {
        // LayoutInflater를 사용하면 개발자가 직접 xml 파일을 클래스로 변환할 수 있음
        // LayoutInflater는 화면 요소이므로 컨텍스트가 필요하고, inflate() 메서드에 레이아웃을 지정해서 호출하면 클래스로 변환
        // 변환된 레이아웃 클래스는 바로 사용할 수 없어서 holder 클래스에 담아서 사용함
        // inflate?
        // (resource, root, attachToRoot) -> (view로 생성할 레이아웃 파일명, attachtoRoot에 따라 root의 역할이 결정, false일 경우 View의 최상위 레이아웃의 속성을 기본으로 레이아웃이 적용)
        val view = LayoutInflater.from(parent.context).inflate(R.layout.item_recycler, parent, false)
        return Holder(view)
    }

    // 리사이클러뷰에서 사용할 데이터의 총 개수를 리턴하는 메서드
    override fun getItemCount(): Int {
        return listData.size
    }

    // 생성된 아이템 레이아웃에 값 입력 후 목록에 출력하는 메서드
    // 스크롤이 될 때마다 실제 화면에 데이터와 레이아웃을 연결함
    override fun onBindViewHolder(holder: Holder, position: Int) {
        val memo = listData[position]
        holder.setMemo(memo)
    }
}

// 아이템뷰는 뷰홀더 자체에서 만들어주는게 아니므로 어댑터가 만들어서 넘겨줘야함
// 뷰홀더 클래스를 구현할 때 기본 기능이 구현되어 있는 리사이클러뷰의 뷰홀더 클래스를 상속받아서 구현함
class Holder(itemView: View):RecyclerView.ViewHolder(itemView) {
    // 클래스가 생성되는 시점에 클릭리스너를 추가
    init {
        itemView.setOnClickListener {
            Toast.makeText(itemView?.context, "${itemView.title_text.text}", Toast.LENGTH_LONG).show()
        }
    }

    fun setMemo(memo: Memo) {
        itemView.number_text.text = "${memo.num}"
        itemView.title_text.text = memo.title

        var sdf = SimpleDateFormat("yyyy/MM/dd")
        var formattedDate = sdf.format(memo.timestamp)
        itemView.date_text.text = formattedDate
    }
}