package also

fun main() {
    data class Person(var name: String, var skills: ArrayList<String>)

    val person = Person("bbaateho", arrayListOf("typescript", "kotlin"))

    val a = person.let {
        it.name = "taeho"
        "success"
    }
    println(person)
    println(a)

    val b = person.also {
        it.name = "bbak"
        it.skills.add("javascript")
    }
    println(person)
    println(b)

}