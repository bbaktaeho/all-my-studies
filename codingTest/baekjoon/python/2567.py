n = int(input())
board = [[0]*30 for _ in range(30)]
adj = []
for _ in range(n):
    x, y = map(lambda x: int(x)-1, input().split())
    adj.append([(x, x+10),(y, y+10)])
    for i in range(10):
        for j in range(10):
            if i == 0 or i == 9:
                v = board[x+i][y+j]
                board[x+i][y+j] = 1 if v == 0 else 0
            else:
                if j == 0 or j == 9:
                    v = board[x+i][y+j]
                    board[x+i][y+j] = 1 if v == 0 else 0
                else:
                    board[x+i][y+j] = 2

result = 0
for i in range(30):
    for j in range(30):
        if board[i][j] == 2:
            board[i][j] = 0

for arr in board:
    print(arr)

for arr in adj:
    print(arr)