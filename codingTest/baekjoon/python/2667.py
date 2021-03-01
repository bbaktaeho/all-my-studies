def dfs(x, y):
    global dange
    if x < 0 or x >= N or y < 0 or y >= N:
        return
    if not graph[x][y] or visited[x][y]:
        return
    visited[x][y] = True
    dange += 1
    dfs(x - 1, y)
    dfs(x + 1, y)
    dfs(x, y - 1)
    dfs(x, y + 1)


N = int(input())
graph = []
for _ in range(N):
    graph.append(list(map(int, list(input()))))

cnt = 0
dange = 0
dangeArr = []
visited = [[False] * N for _ in range(N)]
for i in range(N):
    for j in range(N):
        if graph[i][j] and not visited[i][j]:
            cnt += 1
            dfs(i, j)
            dangeArr.append(dange)
            dange = 0
print(cnt)
for i in sorted(dangeArr):
    print(i)