
package kr.study.maskinfo.models;

import com.squareup.moshi.Json;

public class Store {

    @Json(name = "addr")
    private String addr;
    @Json(name = "code")
    private String code;
    @Json(name = "created_at")
    private String createdAt;
    @Json(name = "lat")
    private double lat;
    @Json(name = "lng")
    private double lng;
    @Json(name = "name")
    private String name;
    @Json(name = "remain_stat")
    private String remainStat;
    @Json(name = "stock_at")
    private String stockAt;
    @Json(name = "type")
    private String type;

    public String getAddr() {
        return addr;
    }

    public void setAddr(String addr) {
        this.addr = addr;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }

    public double getLat() {
        return lat;
    }

    public void setLat(double lat) {
        this.lat = lat;
    }

    public double getLng() {
        return lng;
    }

    public void setLng(double lng) {
        this.lng = lng;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRemainStat() {
        return remainStat;
    }

    public void setRemainStat(String remainStat) {
        this.remainStat = remainStat;
    }

    public String getStockAt() {
        return stockAt;
    }

    public void setStockAt(String stockAt) {
        this.stockAt = stockAt;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

}
