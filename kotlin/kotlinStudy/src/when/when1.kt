package `when`

fun main() {
    print("Enter the score: ")
    val score = readLine()!!.toDouble()
    var grade: Char = 'F'

    // 인자가 없는 when은 ()을 빼고 해도됨
    grade = when (score) {
        in 90.0..100.0 -> 'A'
        in 80.0..89.9 -> 'B'
        in 70.0..79.9 -> 'C'
        in 60.0..69.9 -> 'D'
        else -> 'F'
    }

    println("score: $score, grade: ${grade}")
}