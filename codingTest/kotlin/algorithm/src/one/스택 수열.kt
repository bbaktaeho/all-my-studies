package one

fun main() {
    stackSequence(readLine()!!.toInt())
}

fun stackSequence(N: Int) {
    val stack = mutableListOf<Int>()
    val result = mutableListOf<Char>()
    var num: Int
    var count = 1
    for (i in 1..N) {
        num = readLine()!!.toInt()
        while (count <= num) {
            stack.add(count++)
            result.add('+')
        }
        if (stack.last() == num) {
            stack.removeAt(stack.lastIndex)
            result.add('-')
        }else {
            println("NO")
            return
        }
    }
    result.forEach { println(it) }
}