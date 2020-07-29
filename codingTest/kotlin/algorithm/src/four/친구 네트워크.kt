package four

fun main() {
    repeat (readLine()!!.toInt()) {
        val parent = mutableMapOf<String, String>()
        val count = mutableMapOf<String, Int>()
        repeat (readLine()!!.toInt()) {
            val (x,y) = readLine()!!.split(' ')
            if (!parent.containsKey(x)) {
                parent[x] = x
                count[x] = 1
            }
            if (!parent.containsKey(y)) {
                parent[y] = y
                count[y] = 1
            }
            union(x,y, parent,count)
            println(count[find(x, parent)])

        }
    }
}

fun find(x:String, parent: MutableMap<String, String>): String {
    return if (x == parent[x]) x
    else {
        val p = find(parent[x]!!, parent)
        parent[x] = p
        parent[x]!!
    }
}
fun union(x:String, y:String, parent: MutableMap<String, String>, count: MutableMap<String, Int>) {
    val x = find(x, parent)
    val y = find(y, parent)
    if (x != y) {
        parent[y] = x
        count[x] = count[x]!!+count[y]!!
    }
}