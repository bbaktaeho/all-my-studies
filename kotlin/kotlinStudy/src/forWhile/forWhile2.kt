package forWhile

fun main() {
    print("Enter the lines : ")
    val num = readLine()?.toInt() ?: 0
    if (num == 0) return println("잘못 입력 했다.")

    for (i in num-1 downTo 0) {
        for (j in i downTo 1) print(" ")
        for (k in num-1 downTo i*2-num+1) print('*')
        println()
    }
}