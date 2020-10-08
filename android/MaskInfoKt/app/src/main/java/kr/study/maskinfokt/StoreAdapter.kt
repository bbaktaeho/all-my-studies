package kr.study.maskinfokt

import android.graphics.Color
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import kr.study.maskinfokt.models.Store
import java.util.*

//아이템 뷰 정보를 가지고 있는 클래스
class StoreViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
    var tv_name: TextView = itemView.findViewById(R.id.textview_name)
    var tv_addr: TextView = itemView.findViewById(R.id.textview_addr)
    var tv_dist: TextView = itemView.findViewById(R.id.textview_dist)
    var tv_remain: TextView = itemView.findViewById(R.id.textview_remain)
    var tv_count: TextView = itemView.findViewById(R.id.textview_count)
}

class StoreAdapter : RecyclerView.Adapter<StoreViewHolder>() {
    private var mItems: List<Store> = ArrayList<Store>()
    fun updateItems(items: List<Store>) {
        mItems = items
        notifyDataSetChanged() //ui 갱
    }

    //뷰홀더를 만드는 부분
    //뷰홀더 클래스를 만들어주고 리턴시켜야함
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): StoreViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(
            R.layout.item_store,
            parent,
            false
        ) //adapter가 항상 쓰는 패턴, 사 외워야하는건 아니고.. 개발자 홈페이지에 가이드 보고 하면 되는 것임.
        return StoreViewHolder(view)
    }

    //실제 데이터를 표시하는 부분
    override fun onBindViewHolder(holder: StoreViewHolder, position: Int) {
        val store: Store = mItems[position]
        holder.tv_name.text = store.name
        holder.tv_addr.text = store.addr
        holder.tv_dist.text = "1km"
        var count = "100개 이상"
        var remainStat = "충분"
        var color = Color.BLUE
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
                count = "1개 이상"
                remainStat = "매진"
                color = Color.GRAY
            }
            else -> {
            }
        }
        holder.tv_remain.text = remainStat
        holder.tv_count.text = count
        holder.tv_remain.setTextColor(color)
        holder.tv_count.setTextColor(color)
    }

    //데이터의 갯수
    override fun getItemCount(): Int = mItems.size


}