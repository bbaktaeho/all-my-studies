package com.example.github_api.model

import androidx.recyclerview.widget.DiffUtil

class DiffUtilGithubDataModelItem: DiffUtil.ItemCallback<GithubDataModel.GithubDataModelItem>() {
    override fun areItemsTheSame(
        oldItem: GithubDataModel.GithubDataModelItem,
        newItem: GithubDataModel.GithubDataModelItem
    ): Boolean {
        return newItem.id == oldItem.id
    }

    override fun areContentsTheSame(
        oldItem: GithubDataModel.GithubDataModelItem,
        newItem: GithubDataModel.GithubDataModelItem
    ): Boolean {
        return newItem == oldItem
    }

}