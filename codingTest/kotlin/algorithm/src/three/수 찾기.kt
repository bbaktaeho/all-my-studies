package three

fun main() {
    readLine()!!
    val A = readLine()!!.split(' ').map {it.toInt()}.toIntArray()
    readLine()!!
    val find = readLine()!!.split(' ').map {it.toInt()}
    A.sort()
    for (el in find) binarySearch(el, A)
}

fun binarySearch(num: Int, arr: IntArray) {
    var low = 0
    var high = arr.size-1
    while (low <= high) {
        var middle = (low + high) / 2
        if (num == arr[middle]) return println(1)
        else if (num < arr[middle]) {
            high = middle - 1
            middle = (low+high)/2
        }
        else {
            low = middle + 1
            middle = (low+high)/2
        }
    }
    return println(0)
}


//fun search(el: Int, list: List<Int>): Int {
//    var listSet = list.toSet()
//    listSet.find { it == el }?: return 0
//    return 1
//}


//fun search(el: Int, A: List<Int>): Int {
//    val list = A.sorted()
//    val middle = A.size / 2
//    return if (list.size == 1 && list[0] != el) 0
//    else if (el == list[middle]) 1
//    else if (el < list[middle]) search(el, list.subList(0, middle))
//    else search(el, list.subList(middle, list.size))
//}