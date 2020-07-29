package function

fun sum(a:Int, b: Int) = a+b
fun max(a:Int, b:Int) = if (a > b) a else b

fun main() {
    println("2+3 = "+ sum(2,3))
    println("5 와 3 중에 큰 수 : "+max(5,3))
}
