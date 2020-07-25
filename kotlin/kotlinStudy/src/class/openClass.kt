package `class`

open class Bird(var name: String, var wing: Int, var beak: String) {
    open fun fly() {
        println("fly")
    }
}

class Lark(name: String, wing: Int, beak: String):Bird(name, wing, beak) {
    override fun fly() {
        println("lark fly")
    }
    fun singHitone() {
        println("sing high tone")
    }
}

class Parrot(name: String, wing: Int, beak: String, var language: String) : Bird(name, wing, beak) {
    override fun fly() {
        println("parrot fly")
    }
    fun speak() {
        println("Speak $language")
    }
}

fun main() {
    val lark = Lark("test1", 2, "short")
    val parrot = Parrot("test2", 2, "long", "english")

    lark.singHitone()
    lark.fly()
    parrot.speak()
    parrot.fly()
}