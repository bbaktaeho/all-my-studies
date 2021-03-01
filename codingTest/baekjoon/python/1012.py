import sys
sys.setrecursionlimit(10**6)
rl = sys.stdin.readline
def dfs(x, y):
    if x < 0 or x >= n or y < 0 or y >= m:
        return
    if not board[x][y] or visited[x][y]:
        return
    visited[x][y] = True
    dfs(x-1, y)
    dfs(x+1, y)
    dfs(x, y-1)
    dfs(x, y+1)

for _ in range(int(rl())):
    m, n, k = map(int, rl().split())
    board = [[0] * m for _ in range(n)]

    for _ in range(k):
        y, x = map(int, rl().split())
        board[x][y] = 1
    
    visited = [[False] * m for _ in range(n)]
    cnt = 0
    for i in range(n):
        for j in range(m):
            if board[i][j] == 1 and not visited[i][j]:
                dfs(i, j)
                cnt += 1
    print(cnt)