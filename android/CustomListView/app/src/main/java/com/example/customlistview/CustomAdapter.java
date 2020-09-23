package com.example.customlistview;

import android.content.Context;
import android.text.Layout;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;

import java.util.ArrayList;

public class CustomAdapter extends BaseAdapter {
    ArrayList<CustomItem> items;
    Context context;

    // xml 파일을 자바 코드에서 사용할 수 있게 해줌
    // setContentView 메소드도 LayoutInflater 역할을 수행함
    // 시스템 서비스 객체로 제공이 됨 (Context.getSystemService 메소드로 참조할 수 있음)
    LayoutInflater inflater;

    public CustomAdapter(Context context, ArrayList<CustomItem> items) {
        this.items = new ArrayList<>();
        this.items.addAll(items);
        this.context =context;
        this.inflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
    }

    @Override
    public int getCount() {
        return 0;
    }

    @Override
    public Object getItem(int i) {
        return null;
    }

    @Override
    public long getItemId(int i) {
        return 0;
    }

    @Override
    public View getView(int i, View view, ViewGroup viewGroup) {

        return null;
    }
}
