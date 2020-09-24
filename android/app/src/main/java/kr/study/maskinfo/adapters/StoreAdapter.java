package kr.study.maskinfo.adapters;

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
        holder.tvRemain.setText(store.getRemainStat());
        holder.tvCount.setText("100개 이상");
    }

    @Override
    public int getItemCount() {
        return mItems.size();
    }
}

