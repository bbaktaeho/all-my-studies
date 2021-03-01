from collections import deque


def dfs(v):
    if visited[v]:
        return
    visited[v] = True
    print(v, end=" ")
    for i in arr[v]:
        if not visited[i]:
            dfs(i)


def bfs(v):
    q = deque([v])
    while q:
        node = q.popleft()
        if visited[node]:
            continue
        print(node, end=" ")
        visited[node] = True
        for i in arr[node]:
            q.append(i)


n, m, v = map(int, input().split())
arr = [[] for _ in range(n + 1)]
for _ in range(m):
    x, y = map(int, input().split())
    arr[x].append(y)
    arr[y].append(x)
for i in arr:
    i.sort()  # 정점 번호가 작은 것 부터

visited = [False for _ in range(n + 1)]
dfs(v)
print()
visited = [False for _ in range(n + 1)]
bfs(v)