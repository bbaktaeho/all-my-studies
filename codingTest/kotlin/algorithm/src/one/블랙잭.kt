package one

fun main() {
    val (N, M) = readLine()!!.toString().split(' ').map {it.toInt()}
    val arr = readLine()!!.toString().split(' ').map { it.toInt() }
    if (arr.size != N) return
    println(nearSum(M, arr))
}

// 경우의 수
// C(n, 3) -> n개에서 3개를 뽑는 경우의 수 n*(n-1)*(n-2)/3!
fun nearSum(M: Int, arr: List<Int>): Int {
    var sum: Int = 0
    var result: Int = 0
    for (i in 0..arr.lastIndex) {
        for (j in (i+1)..arr.lastIndex) {
            for (k in (j+1)..arr.lastIndex) {
                sum = arr[i] + arr[j] + arr[k]
                if (sum <= M)  result = result.coerceAtLeast(sum)
            }
        }
    }
    return result
}
