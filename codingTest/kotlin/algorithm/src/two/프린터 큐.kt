package two

fun main() {
    val testCase = readLine()!!.toInt()
    for (i in 1..testCase) {
        val (N, M) = readLine()!!.split(' ').map { it.toInt() }
        val queue = readLine()!!.split(' ')
                .mapIndexed { index, v -> (index to v.toInt()) }
                .toMutableList()
        println(printerQueue(M, queue))
    }
}

fun printerQueue(M: Int, queue: MutableList<Pair<Int, Int>>):Int {
    val value = queue[M]
    var count = 1
    while (true) {
        if (queue[0]==value && queue[0]== queue.maxBy { it.second }) return count
        else if (queue[0] == queue.maxBy { it.second }) {
            queue.removeAt(0)
            count++
        }else queue.add(queue.removeAt(0))
    }
}