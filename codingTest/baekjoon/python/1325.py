import sys
from collections import deque
input = sys.stdin.readline

N, M = map(int, input().split())
arr = [[] for _ in range(N+1)]

for _ in range(M):
    x, y = map(int, input().split())
    arr[y].append(x)

def bfs(v):
    q = deque([v])
    visited = [False] * (N + 1)
    visited[v] = True
    count = 1
    while q:
        cur = q.popleft()
        for e in arr[cur]:
            if visited[e]: continue
            q.append(e)
            visited[v] = True
            count += 1
    return count

result = [0] * (N + 1)
for i in range(1, N+1): result[i] = bfs(i)
max_cnt = max(result)
for i in range(1, N+1):
    if max_cnt == result[i]: print(i, end=' ')
