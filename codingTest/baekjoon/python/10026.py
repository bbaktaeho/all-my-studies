import sys
sys.setrecursionlimit(10**6)
rl = sys.stdin.readline

def dfs(x, y, color):
    if x < 0 or x >= N or y < 0 or y >= N:
        return
    if visited[x][y] or graph[x][y] != color:
        return
    visited[x][y] = True
    dfs(x-1, y, color)
    dfs(x+1, y, color)
    dfs(x, y-1, color)
    dfs(x, y+1, color)

N = int(rl())
graph = []
for _ in range(N):
    graph.append(list(rl()))

cnt1 = 0
for color in ('R', 'B', 'G'):
    visited = [[False] * N for _ in range(N)]
    for i in range(N):
        for j in range(N):
            if graph[i][j] == color and not visited[i][j]:
                dfs(i, j, color)
                cnt1 += 1
cnt2 = 0
for i in range(N):
    for j in range(N):
         if graph[i][j] == "G":
                graph[i][j] = "R"
for color in ('R', 'B'):
    visited = [[False] * N for _ in range(N)]
    for i in range(N):
        for j in range(N):
            if graph[i][j] == color and not visited[i][j]:
                dfs(i, j, color)
                cnt2 += 1
print(cnt1, cnt2)