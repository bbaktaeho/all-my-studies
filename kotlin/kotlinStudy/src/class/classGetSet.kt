package `class`

class User(_id: Int, _name: String) {
    val id: Int = _id
        get() = field

    var name: String = _name
        get() = field + "get 동작"
        set(value) {
            field = value
        }
}

fun main() {
    val user = User(1, "taeho")
    println(user.id)
    println(user.name)
}