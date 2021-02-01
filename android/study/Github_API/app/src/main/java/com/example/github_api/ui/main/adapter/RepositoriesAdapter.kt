package com.example.github_api.ui.main.adapter

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.recyclerview.widget.ListAdapter
import com.example.github_api.R
import com.example.github_api.model.DiffUtilGithubDataModelItem
import com.example.github_api.model.GithubDataModel

class RepositoriesAdapter: ListAdapter<GithubDataModel.GithubDataModelItem, RepositoriesViewHolder>(DiffUtilGithubDataModelItem()) {
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): RepositoriesViewHolder {
        val itemView = LayoutInflater.from(parent.context).inflate(R.layout.list_item_repositories, parent, false)
        return RepositoriesViewHolder(itemView)
    }

    override fun onBindViewHolder(holder: RepositoriesViewHolder, position: Int) {
        val item = getItem(position)
        holder.bind(item)
    }

}