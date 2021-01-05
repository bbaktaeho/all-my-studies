package com.example.viewpager_1

import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.fragment.app.FragmentActivity
import androidx.fragment.app.FragmentManager
import androidx.fragment.app.FragmentPagerAdapter
import androidx.recyclerview.widget.RecyclerView
import androidx.viewpager2.adapter.FragmentStateAdapter

class FragmentAdapter(fragmentActivity: FragmentActivity) : FragmentStateAdapter(fragmentActivity) {
    var fragments = mutableListOf<Fragment>()

    override fun getItemCount(): Int {
        return fragments.size
    }

    override fun createFragment(position: Int): Fragment {
        return fragments[position]
    }

    fun addFragment(fm: Fragment) {
        fragments.add(fm)
        notifyItemInserted(fragments.size-1)
    }

    fun removeFragment(fm: Fragment) {
        fragments.removeLast()
        notifyItemRemoved(fragments.size)
    }

}

//class FragmentAdapter:  RecyclerView.Adapter<PageViewHolder>(){
////    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): PageViewHolder {
////    }
////
////    override fun onBindViewHolder(holder: PageViewHolder, position: Int) {
////    }
////
////    override fun getItemCount(): Int {
////    }
////
////}
////
////class PageViewHolder(view: View): RecyclerView.ViewHolder(view) {
////
////}