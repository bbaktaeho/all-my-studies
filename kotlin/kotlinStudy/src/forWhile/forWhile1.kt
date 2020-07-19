package forWhile


fun main() {
    print("number enter : ")
    val num = readLine()!!.toInt()
    /*for (i in 1..num) {
        for (j in i until num + i) {
            if (j > num) print(j-num)
            else print(j)
        }
        println()
    }*/
    /*for (i in 0 until num) {
        for (j in 0 until num) {
            print((i+j)%num + 1)
        }
        println()
    }*/
    for (i in 0 until num) {
        for (j in 0 until num) print((i+j)%num+1)
        println()
    }
}