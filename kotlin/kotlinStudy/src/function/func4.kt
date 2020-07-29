package function

//val multi = { x * y }
//val multi = { x, y -> x * y }
//val multi: Int = { x: Int, y: Int -> x * y }
val multi = { x: Int, y: Int -> x * y }
fun highFunc1(sum: (Int, Int)->Int, a:Int, b:Int): Int {
    return sum(a,b)
}
fun highFunc2( a:Int, b:Int,sum: (Int, Int)->Int): Int {
    return sum(a,b)
}

fun main() {
    val result1 = highFunc1({x,y -> x+y}, 1,3)
    val result2 = highFunc2(1,3){x,y -> x+y}
    println(result1)
    println(result2)
}
