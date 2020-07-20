package test

fun main() {
    val length = 3
    val arr = arrayListOf<String>("dafadf", "fsdf", "342","fagsdfhdfhs", "Faggv");
    val lengthFlterArr = arr.filter {
        it.length > length
    }
    println(lengthFlterArr)
}