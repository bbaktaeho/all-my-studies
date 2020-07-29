package `class`

open class Person {
    constructor(firstName: String) {
        println("[Person] firstName: ${firstName}")
    }
    constructor(firstName: String, lastName: String) {
        println("[Person] firstName: ${firstName}, lastName: ${lastName}")
    }
}
class Developer: Person {
    constructor(firstName: String): this(firstName, "taeho") {
        println("[Developer] firstname: $firstName")
    }
    constructor(firstName: String, lastName: String): super(firstName, lastName) {
        println("[Develper] firstName: $firstName, lastName: $lastName")
    }
}

fun main() {
    val sean = Developer("Im")
}