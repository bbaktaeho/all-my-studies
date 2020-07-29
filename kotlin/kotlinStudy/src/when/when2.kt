package `when`

fun main() {
    print("Score Enter: ")
    val score = readLine()!!.toDouble()
    var grade = when {
        score >= 90.0 -> 'A'
        score in 80.0..89.9 -> 'B'
        score in 70.0..79.9 -> 'C'
        score in 60.0..69.9 -> 'D'
        else -> 'F'
    }
    println("score: $score, grade: $grade")
}