package com.example.listandrecycler;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;


import java.util.ArrayList;

public class Adapter extends RecyclerView.Adapter<Holder> {
    ArrayList<String> list;

    Adapter(ArrayList<String> list) {
        this.list = list;
    }

    @NonNull
    @Override
    public Holder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        Context context = parent.getContext();
        LayoutInflater inflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        View view = inflater.inflate(R.layout.item_recycler, parent, false);
        return new Holder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull Holder holder, int position) {
        holder.tv.setText(list.get(position));
    }


    @Override
    public int getItemCount() {
        return list.size();
    }
}

class Holder extends RecyclerView.ViewHolder {
    TextView tv;

    public Holder(@NonNull View itemView) {
        super(itemView);
        tv = itemView.findViewById(R.id.text);
    }
}