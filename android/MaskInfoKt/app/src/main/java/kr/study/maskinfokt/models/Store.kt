package kr.study.maskinfokt.models

data class Store(
    var addr: String,
    var code: String,
    var createdAt: String,
    var lat: Double,
    var lng: Double,
    var name: String,
    var remain_stat: String,
    var stock_stat: String,
    var type: String,
)
