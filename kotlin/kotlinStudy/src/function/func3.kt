package function

fun avgFunc(initial: Float, vararg numbers: Float):Double {
    var result = 0F
    for (num in numbers) result += num
    println("result: ${result} numbers.size: ${numbers.size}")
    val avg = (result+initial) / (numbers.size+1)
    return avg.toDouble()
}

fun main() {
    val result = avgFunc(5f, 100f, 90f, 80f)
    println(result)
}