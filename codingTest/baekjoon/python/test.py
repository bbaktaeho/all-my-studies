from sys import stdin
from collections import deque
input = stdin.readline

N, M, V = map(int, input().split())
v_arr = [[] for _ in range(N+1)]
for _ in range(M):
    x, y = map(int, input().split())
    v_arr[x].append(y)
    v_arr[y].append(x)

for arr in v_arr: arr.sort()

dfs_result = []
bfs_result = []
visited = [False] * (N + 1)

def dfs(v):
    if visited[v]: return
    dfs_result.append(v)
    visited[v] = True
    for next_v in v_arr[v]: dfs(next_v)

def bfs(v):
    q = deque([v])
    while q:
        cur = q.popleft()
        if visited[cur]: continue
        bfs_result.append(cur)
        visited[cur] = True
        for next_v in v_arr[cur]: q.append(next_v)

dfs(V)
visited = [False] * (N + 1)
bfs(V)
print(*dfs_result)
print(*bfs_result)