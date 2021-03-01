def solution(board):
    rowSize = len(board)
    colSize = len(board[0])

    if rowSize == 1 and colSize == 1:
        return board[0][0]
    else:
        maxValue = 0
        for i in range(1, rowSize):
            for j in range(1, colSize):
                if board[i][j] != 0:
                    board[i][j] = 1 + min(board[i-1][j], board[i-1][j-1], board[i][j-1])
                    maxValue = max(board[i][j], maxValue)
        return maxValue ** 2