import sys
sys.setrecursionlimit(10**6)
rl = sys.stdin.readline
n, k = map(int, rl().split())
board = [list(rl().rstrip()) for _ in range(n)]

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def dfs(x, y):
    cnt = 1
    checkArr1[x][y] = True
    for i in range(4):
        newX, newY = x+dx[i], y+dy[i]
        if newX < 0 or newX >= n or newY < 0 or newY >= 10:
            continue
        if checkArr1[newX][newY] or board[x][y] != board[newX][newY]:
            continue
        cnt += dfs(newX, newY)
    return cnt

def dfs2(x, y, num):
    checkArr2[x][y] = True
    board[x][y] = '0'
    for i in range(4):
        newX, newY = x+dx[i], y+dy[i]
        if newX < 0 or newX >= n or newY < 0 or newY >= 10:
            continue
        if checkArr2[newX][newY] or board[newX][newY] != num:
            continue
        dfs2(newX, newY, num)

def setBoard():
    for i in range(10):
        notZeroArr = []
        for j in range(n):
            if board[j][i] != '0':
                notZeroArr.append(board[j][i])
        for k in range(n - len(notZeroArr)):
            board[k][i] = '0'
        for z in range(n - len(notZeroArr), n):
            board[z][i] = notZeroArr[z - (n-len(notZeroArr))]
    pass

while True:
    exist = False
    checkArr1 = [[False] * 10 for _ in range(n)]
    checkArr2 = [[False] * 10 for _ in range(n)]
    for i in range(n):
        for j in range(10):
            if board[i][j] == '0' or checkArr1[i][j]:
                continue
            result = dfs(i, j) # 개수 세기
            if result >= k:
                dfs2(i, j, board[i][j]) # 지우기
                exist = True
    if not exist:
        break
    setBoard()

for i in board:
    print(''.join(i))