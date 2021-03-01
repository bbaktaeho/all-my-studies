def dfs(v):
    global cnt
    if v < 0 or v > N or visited[v]:
        return
    visited[v] = True
    cnt += 1
    for i in comArr[v]:
        dfs(i)


N = int(input())
comArr = [[] for _ in range(N + 1)]
for _ in range(int(input())):
    x, y = map(int, input().split())
    comArr[x].append(y)
    comArr[y].append(x)

cnt = -1
visited = [False] * (N + 1)
dfs(1)
print(cnt)