n, m = map(int, input().split())

board = []
for _ in range(n):
    board.append(input())

result = []

for row in range(n-7):
    for col in range(m-7):
        cntW = 0
        cntB = 0
        for i in range(row, row+8):
            for j in range(col, col+8):
                if (i+j) % 2 == 0:
                    if board[i][j] != 'W':
                        cntW += 1
                    if board[i][j] != 'B':
                        cntB += 1
                else:
                    if board[i][j] != 'B':
                        cntW += 1
                    if board[i][j] != 'W':
                        cntB += 1
        result.append(cntW)
        result.append(cntB)
print(min(result))