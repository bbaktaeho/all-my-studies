package one

fun main() {
    val arr1 = intArrayOf(1,2,3,4,5,6,7,8)
    rightRotateByK(arr1, 2, 6, 5)
    println(arr1.toList())

    val arr2 = intArrayOf(1,2,3,4,5,6,7,8)
    leftRotate(arr2, 2, 6)
    println(arr2.toList())
}

// 배열의 일부를 오른쪽으로 1회전
fun rightRotate(arr: IntArray, start: Int, end: Int) {
    val temp = arr[end]
    for (i in end downTo start+1) {
        arr[i] = arr[i-1]
    }
    arr[start] = temp
}

// 배열의 일부를 왼쪽으로 1회전
fun leftRotate(arr: IntArray, start: Int, end: Int ) {
    val temp = arr[start]
    for (i in start until end) arr[i] = arr[i+1]
    arr[end] = temp
}

// k값을 받아서 k만큼 오른쪽으로 회전
fun rightRotateByK(arr:IntArray, start: Int, end: Int, k: Int) {
    var temp: Int
    for (i in 1..k) {
        temp = arr[end]
        for (j in end downTo start + 1) arr[j] = arr[j - 1]
        arr[start] = temp
    }
}