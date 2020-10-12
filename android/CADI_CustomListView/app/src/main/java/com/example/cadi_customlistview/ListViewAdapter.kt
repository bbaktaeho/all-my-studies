package com.example.cadi_customlistview

import android.annotation.SuppressLint
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.BaseAdapter
import kotlinx.android.synthetic.main.custom_list_item.view.*

class ListViewAdapter(private val items: MutableList<ListViewItem>): BaseAdapter() {

    override fun getCount(): Int = items.size

    override fun getItem(position: Int): ListViewItem = items[position]

    override fun getItemId(position: Int): Long = position.toLong()

    override fun getView(position: Int, view: View?, parent: ViewGroup?): View? {
        var convertView = view
        var viewHolder: CustomViewHolder
        if (convertView == null) {
            convertView = LayoutInflater.from(parent?.context).inflate(R.layout.custom_list_item, parent, false)
            viewHolder = CustomViewHolder()
            viewHolder.drawableIcon = convertView.image_title
            viewHolder.textTitle = convertView.text_title
            viewHolder.textSubTitle = convertView.text_sub_title
        }else {
            viewHolder = convertView.tag as CustomViewHolder
        }
        val item: ListViewItem = items[position]
        viewHolder.drawableIcon?.image_title?.setImageDrawable(item.icon)
        viewHolder.textTitle?.text_title!!.text = item.title
        viewHolder.textSubTitle?.text_sub_title!!.text = item.subTitle

        return convertView
    }
}