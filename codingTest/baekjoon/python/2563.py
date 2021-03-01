n = int(input())
board = [[0]*100 for _ in range(100)]
for _ in range(n):
    x, y = map(lambda x: int(x)-1, input().split())
    for i in range(10):
        for j in range(10):
            board[x+j][y+i] = 1
result = 0
for i in board:
    result += sum(i)
print(result)