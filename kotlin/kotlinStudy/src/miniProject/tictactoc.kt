package miniProject

import java.lang.Exception

var x: Int = 0
var y: Int = 0

fun main() {
    var board = Array<CharArray>(3) {CharArray(3){' '}}
    val names = arrayOf("Player 1", "Player 2")
    val marks = arrayOf('O', 'X')

    play(board, names, marks)

}

// 보드 판의 범위 검사
val isInRange = {x:Int, y:Int -> !(x > 2 || y > 2 || x < 0 || y < 0) }

// 빈 칸 검사
fun isValid(board: Array<CharArray>, x: Int, y: Int): Boolean {
    return isInRange(x,y) && board[y][x] == ' '
}

// 위치 입력 후 검사
fun isPlayerInput(name: String, board: Array<CharArray>): Boolean {
    print("$name 입력(줄,칸): ")
    var input: String? = null
    val splitList: List<String>
    do input = readLine()
    while (input == null)
    try {
        splitList = input.split(',')
        y = splitList[0].toInt()
        x = splitList[1].toInt()
        if (isValid(board, x, y)) return true
        return false
    } catch (e: Exception) {
        println("뭔가 잘못 입력 했어요!")
        return isPlayerInput(name, board)
    }
}

// 보드 출력
fun printBoard(board: Array<CharArray>) {
    print("  0 1 2\n")
    for (y in 0..2) {
        print("$y ")
        for (x in 0..2) {
            print("${board[y][x]}")
            if (x != 2) print("|")
        }
        println("\n  -+-+-")
    }
}

// 이겼는지 검사
fun isWin(board: Array<CharArray>, x: Int, y: Int): Boolean {
    // 가로, 세로, 우하 대각선, 우상 대각선 방향에 대한 x, y 변화량
    val dx = arrayOf(-1, 1, 0, 0, -1, 1, 1, -1)
    val dy = arrayOf(0, 0, -1, 1, -1, 1, -1, 1)

    for (d in 0..3) {
        var count = 1
        for (b in 0..1) {
            val index = 2 * d + b
            var cx = x + dx[index]
            var cy = y + dy[index]
            while (isInRange(cx, cy)) {
                if (board[cy][cx] == board[y][x]) count++
                cx += dx[index]
                cy += dy[index]
            }
        }
        if (count == 3) return true
    }
    return false
}

// 플레이 진행하기
fun play(board: Array<CharArray>, names: Array<String>, marks: Array<Char>) {
    var round = 0
    var turn = 0
    while (true) {
        println("\n ${turn + 1}번째 턴\n")
        printBoard(board)
        if (!isPlayerInput(names[turn], board))
            continue
        board[y][x] = marks[turn]
        round++
        if(isWin(board, x, y)) {
            println("${names[turn]} 승리!")
            return
        }
        turn = (turn +1)%2
    }
}