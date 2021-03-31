import sys
from collections import deque
input = sys.stdin.readline

N, M, V = map(int, input().strip().split())
v_arr = [[] for _ in range(N+1)] # index값으로 정점을 표현한 배열
for _ in range(M):
    x, y = map(int, input().strip().split())
    v_arr[x].append(y)
    v_arr[y].append(x)
for v in v_arr: v.sort() # 작은 정점부터 탐색할 수 있도록 정렬

def bfs(v): # 너비 우선 탐색은 큐를 사용
    q = deque([v])
    while q:
        v = q.popleft()
        if visited[v]: continue
        visited[v] = True
        result_bfs.append(v)
        for c in v_arr[v]: q.append(c)

def dfs(v):
    if visited[v]: return
    visited[v] = True
    result_dfs.append(v)
    for c in v_arr[v]: dfs(c)

result_bfs = []
result_dfs = []
visited = [False] * (N + 1)
dfs(V)
visited = [False] * (N + 1)
bfs(V)
print(" ".join(map(str, result_dfs)))
print(" ".join(map(str, result_bfs)))