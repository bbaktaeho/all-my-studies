board = []
for _ in range(10):
    board.append(list(map(int, input().split())))


def isMove(i, j):
    if board[i][j] == 2:
        board[i][j] = 9
        return
    elif board[i][j] == 0:
        board[i][j] = 9
        if board[i][j + 1] == 0 or board[i][j + 1] == 2:
            isMove(i, j + 1)
        elif board[i+1][j] == 0 or board[i+1][j] == 2:
            isMove(i + 1, j)
    else:
        return


isMove(1, 1)
for arr in board:
    print(" ".join(map(str, arr)))
