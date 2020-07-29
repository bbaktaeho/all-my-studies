package `class`

// 연못에 오리가 집합된 관계
// 없어도 되고 있을 땐 여러 마리 존재 가능
private class Pond(_name: String, _members: MutableList<Dock>) {
    val name = _name
    val members = _members
    constructor(_name: String): this(_name, mutableListOf<Dock>())
}

// 오리는 하나의 연못만 갈 수 있음
// 연못을 안 가도됨
private class Dock(val name: String)

fun main() {
    val pond = Pond("myFavorite")
    val dock1 = Dock("d1")
    val dock2 = Dock("d2")
    pond.members.add(dock1)
    pond.members.add(dock2)
}