package `class`

class Person2(firstName: String, out: Unit = println("[Primary Constructor] Parameter")) {
    val fName = println("[Property] Person fName: $firstName")
    init {
        println("[init] Person init block")
    }

    constructor(firstName: String, age: Int, out: Unit = println("[Secondary Constructor] Parameter")): this(firstName) {
        println("[Secondary Constructor] Body: $firstName, $age")
    }
}

fun main() {
    val p1 = Person2("taeho", 26)
    println()
    val p2 = Person2("gildong")
}