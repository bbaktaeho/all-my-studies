h, w = map(int, input().split())
n = int(input())
sticks = []
while n:
    sticks.append(list(map(int, input().split())))
    n -= 1

board = [[0 for _ in range(w)] for _ in range(h)]

for stick in sticks:
    for i in range(stick[0]):
        if stick[1] == 0:
            board[stick[2] - 1][stick[3] - 1 + i] = 1
        else:
            board[stick[2] - 1 + i][stick[3] - 1] = 1

for i in board:
    print(" ".join(map(str, i)))
