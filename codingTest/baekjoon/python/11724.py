import sys
from collections import deque

sys.setrecursionlimit(1000000)


def dfs(v):
    if visited[v]:
        return
    visited[v] = True
    for i in arr[v]:
        dfs(i)


def bfs(v):
    q = deque([v])
    while q:
        item = q.popleft()
        if visited[item]:
            continue
        visited[item] = True
        for i in arr[item]:
            q.append(i)


rl = sys.stdin.readline
n, m = map(int, rl().split())
arr = [[] for _ in range(n + 1)]
for _ in range(m):
    u, v = map(int, rl().split())
    arr[u].append(v)
    arr[v].append(u)

visited = [False] * (n + 1)
cnt = 0
for i in range(1, n + 1):
    if not visited[i]:
        cnt += 1
        dfs(i) # bfs도 쌉가능
print(cnt)