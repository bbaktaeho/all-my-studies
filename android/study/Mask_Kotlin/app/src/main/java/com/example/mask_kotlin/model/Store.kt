package com.example.mask_kotlin.model

data class Store(
    var addr: String,
    var code: String,
    var created_at: String,
    var lat: Double,
    var lng: Double,
    var name: String,
    var remain_stat: String,
    var stock_at: String,
    var type: String
    ) {
}