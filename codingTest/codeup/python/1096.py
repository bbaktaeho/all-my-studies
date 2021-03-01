n = int(input())
arr = []
while n:
    arr.append(input().split())
    n -= 1

board = [[0 for _ in range(19)] for _ in range(19)]
for point in arr:
    board[int(point[0]) - 1][int(point[1]) - 1] = 1
for i in board:
    print(" ".join(map(str, i)))