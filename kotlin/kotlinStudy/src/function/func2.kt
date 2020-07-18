package function

fun allSum(vararg nums: Int): Int {
    var sum: Int = 0;
    for (num in nums) sum += num
    return sum
}

fun main() {
    val result = allSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    println(result)
}