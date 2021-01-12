package com.example.mask_java;

import android.graphics.Color;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.mask_java.model.Store;

import java.util.ArrayList;
import java.util.List;

public class MainAdapter extends RecyclerView.Adapter<ViewHolder> {
    private List<Store> mItems = new ArrayList<>();

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_store, parent, false);

        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        Store store = mItems.get(position);
        holder.nameTextView.setText(store.getName());
        holder.addressTextView.setText(store.getAddr());
        holder.distanceTextView.setText("1.0km");

        String remainStat = "충분";
        String count = "100개 이상";
        int color = Color.GREEN;
        switch (store.getRemainStat()) {
            case "planty":
                count = "100개 이상";
                remainStat = "충분";
                color = Color.GREEN;
                break;
            case "some":
                count = "30개 이상";
                remainStat = "여유";
                color = Color.YELLOW;
                break;
            case "few":
                count = "2개 이상";
                remainStat = "매진 임박";
                color = Color.RED;
                break;
            case "empty":
                count = "1개 이하";
                remainStat = "재고 없음";
                color = Color.GRAY;
                break;
            default:
                break;
        }
        holder.remainTextView.setText(remainStat);
        holder.countTextView.setText(count);
        holder.remainTextView.setTextColor(color);
        holder.countTextView.setTextColor(color);

    }

    @Override
    public int getItemCount() {
        return mItems.size();
    }

    public void updateItems(List<Store> items) {
        mItems = items;
        // ui 갱신
        notifyDataSetChanged();
    }
}

// 아이템 뷰의 정보를 가지고 있는 클래스
class ViewHolder extends RecyclerView.ViewHolder {
    TextView nameTextView;
    TextView addressTextView;
    TextView distanceTextView;
    TextView remainTextView;
    TextView countTextView;

    public ViewHolder(@NonNull View itemView) {
        super(itemView);

        nameTextView = itemView.findViewById(R.id.txt_name);
        addressTextView = itemView.findViewById(R.id.txt_addr);
        distanceTextView = itemView.findViewById(R.id.txt_distance);
        remainTextView = itemView.findViewById(R.id.txt_remain);
        countTextView = itemView.findViewById(R.id.txt_count);
    }
}