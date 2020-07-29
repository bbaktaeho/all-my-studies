package lamda

fun main() {
    val result1 = isEven(3)
    val result2 = isOdd(3)
    println("$isEven, $result1")
    println("$isOdd, $result2")
}
val isEven = {x:Int ->
    val isEven = x % 2 == 0
    isEven
}

val isOdd:(Int)->Boolean = {
    val isOdd = it % 2 != 0
    isOdd
}
