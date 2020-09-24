package kr.study.maskinfo.adapters;

import android.graphics.Color;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.ArrayList;
import java.util.List;

import kr.study.maskinfo.R;
import kr.study.maskinfo.models.Store;

public class StoreAdapter extends RecyclerView.Adapter<StoreAdapter.StoreViewHolder> {
    private List<Store> mItems = new ArrayList<>();

    // 아이템 뷰의 정보를 가지고 있는 클래스
    static class StoreViewHolder extends RecyclerView.ViewHolder {
        TextView tvName;
        TextView tvAddr;
        TextView tvDistance;
        TextView tvRemain;
        TextView tvCount;

        public StoreViewHolder(@NonNull View itemView) {
            super(itemView);

            tvName = itemView.findViewById(R.id.tv_name);
            tvAddr = itemView.findViewById(R.id.tv_addr);
            tvDistance = itemView.findViewById(R.id.tv_distance);
            tvRemain = itemView.findViewById(R.id.tv_remain);
            tvCount = itemView.findViewById(R.id.tv_count);
        }
    }

    public void updateItems(List<Store> items) {
        mItems = items;
        notifyDataSetChanged(); // UI 갱신
    }

    @NonNull
    @Override
    public StoreViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_store, parent, false);
        return new StoreViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull StoreViewHolder holder, int position) {
        Store store = mItems.get(position);

        holder.tvName.setText(store.getName());
        holder.tvAddr.setText(store.getAddr());
        holder.tvDistance.setText("1.0km");

        String remainStat = "충분";
        String count = "100개 이상";
        int color = Color.GREEN;
        switch (store.getRemainStat()) {
            case "plenty": count = "100개 이상"; remainStat = "충분"; color = Color.GREEN; break;
            case "some": count = "30개 이상"; remainStat = "여유"; color = Color.YELLOW; break;
            case "few": count = "2개 이상"; remainStat = "매진 임박"; color = Color.RED; break;
            case "empty": count = "1개 이하"; remainStat = "재고 없음"; color = Color.GRAY; break;
            default: break;
        }

        holder.tvRemain.setText(remainStat);
        holder.tvCount.setText(count);
        holder.tvRemain.setTextColor(color);
        holder.tvCount.setTextColor(color);
    }

    @Override
    public int getItemCount() {
        return mItems.size();
    }
}

