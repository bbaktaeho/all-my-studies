package com.example.github_api.ui.main.adapter

import android.view.View
import androidx.recyclerview.widget.RecyclerView
import com.example.github_api.model.GithubDataModel
import kotlinx.android.synthetic.main.list_item_repositories.view.*

class RepositoriesViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
    fun bind(item: GithubDataModel.GithubDataModelItem?) {
        itemView.txt_repo_name.text = item?.name
        itemView.txt_repo_description.text = item?.description
    }
}