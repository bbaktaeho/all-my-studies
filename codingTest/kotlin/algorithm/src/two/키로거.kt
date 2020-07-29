package two

fun main() {
    val result: MutableList<String> = mutableListOf()
    val testCase = readLine()!!.toInt()
    for (i in 1..testCase) {
        val case = readLine()!!
        result.add(keyLogger(case))
    }
    result.forEach { println(it) }
}

fun keyLogger(case:String): String {
    val left = mutableListOf<Char>()
    val right = mutableListOf<Char>()
    for (i in case) {
        when (i) {
            '<' -> if (left.isNotEmpty()) right.add(left.removeAt(left.size-1))
            '>' -> if (right.isNotEmpty()) left.add(right.removeAt(right.size-1))
            '-' -> if (left.isNotEmpty()) left.removeAt(left.size-1)
            else -> left.add(i)
        }
    }
    right.reverse()
    return left.joinToString("")+right.joinToString("")
}

// 컴파일 에
//fun keyLogger(case:String): String {
//    val left = mutableListOf<Char>()
//    val right = mutableListOf<Char>()
//    for (i in case) {
//        when (i) {
//            '<' -> if (left.isNotEmpty()) right.add(left.removeLast())
//            '>' -> if (right.isNotEmpty()) left.add(right.removeLast())
//            '-' -> if (left.isNotEmpty()) left.removeLast()
//            else -> left.add(i)
//        }
//    }
//    right.reverse()
//    return if (left.containsAll(right)) left.joinToString("") else ""
//}


//// 런타임 에러
//fun keyLogger(case: MutableList<Char>): String {
//    val result = mutableListOf<Char>()
//    var cur: Int = 0
//    while (case.isNotEmpty())
//        when (case[0]) {
//            '<' -> {
//                if (cur != 0) {
//                    cur -= 1
//                    case.removeAt(0)
//                }else case.removeAt(0)
//            }
//            '>' -> if (cur < result.size) {
//                cur++
//                case.removeAt(0)
//            }else case.removeAt(0)
//            '-' -> {
//                if (result.isNotEmpty()) {
//                    result.removeAt(cur-1)
//                    case.removeAt(0)
//                }else case.removeAt(0)
//            }
//            else -> {
//                result.add(cur, case.removeAt(0))
//                cur++
//            }
//        }
//    return result.joinToString("")
//}