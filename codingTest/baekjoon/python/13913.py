from collections import deque

N, K = map(int, input().split())
visited = [False for _ in range(K + 1 + N*2)]
path = []
cnt = 0

def bfs(v):
    q = deque([v])
    while q:
        node = q.popleft()
        if visited[node]: continue
        visited[node] = True
        path.append(node)
        cnt += 1
        if K == node: break
        if node < K: q.append(node-1)
        else:
            if node*2 <= K: q.append(node*2)
            else: q.append(node+1)
    