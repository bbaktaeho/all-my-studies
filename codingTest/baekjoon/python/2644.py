import sys
from collections import deque

rl = sys.stdin.readline

n = int(rl())
a, b = map(int, rl().split())
arr = [[] for _ in range(n + 1)]
visited = [0] * (n + 1)
for _ in range(int(rl())):
    x, y = map(int, rl().split())
    arr[x].append(y)
    arr[y].append(x)
q = deque([a])
while q:
    item = q.popleft()
    if item == b:
        break
    for i in arr[item]:
        if not visited[i]:
            visited[i] = visited[item] + 1
            q.append(i)
print(visited[b] if visited[b] != 0 else -1)