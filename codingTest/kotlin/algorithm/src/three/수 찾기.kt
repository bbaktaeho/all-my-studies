package three

fun main() {
    val N = readLine()!!.toInt()
    val A = readLine()!!.split(' ').map {it.toInt()}
    val M = readLine()!!.toInt()
    val find = readLine()!!.split(' ').map {it.toInt()}
    val result = mutableListOf<Int>()
    for (el in find) result.add(search(el, A))
    result.forEach { println(it) }
}

fun search(el: Int, list: List<Int>): Int {
    var listSet = list.toSet()
    listSet.find { it == el }?: return 0
    return 1
}


//fun search(el: Int, A: List<Int>): Int {
//    val list = A.sorted()
//    val middle = A.size / 2
//    return if (list.size == 1 && list[0] != el) 0
//    else if (el == list[middle]) 1
//    else if (el < list[middle]) search(el, list.subList(0, middle))
//    else search(el, list.subList(middle, list.size))
//}