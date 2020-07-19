package let

fun main() {
    val a = 10
    val aResult = (a + 2).let { a + it }
    println(aResult)

    val b = 20
    val bResult = b.let {outter -> outter.let { inner -> inner.let {it*2} }}
    println(bResult)
}