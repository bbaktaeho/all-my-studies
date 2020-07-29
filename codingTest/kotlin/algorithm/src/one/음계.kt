package one

fun main() {
    val arr = readLine()!!.toString()
    val numArr = arr.split(' ').map { it.toInt() }
    val result = isMusic(numArr)
    println(result)
}

fun isMusic(arr: List<Int>): String {
    if (arr.size != 8) return "error"

    when (arr[0]) {
        1 -> {
            for (i in 0 until arr.size-1) if (arr[i] > arr[i+1]) return "mixed"
            return "ascending"
        }
        8 -> {
            for (i in 0 until arr.size-1) if (arr[i] < arr[i + 1]) return "mixed"
            return "descending"
        }
        else -> { return "mixed" }
    }
}