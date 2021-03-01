import sys
sys.setrecursionlimit(10 ** 6)
rl = sys.stdin.readline

def dfs(x, y):
    if x < 0 or x >= N or y < 0 or y >= N:
        return
    if temp_graph[x][y] == 0 or visited[x][y]:
        return
    visited[x][y] = True
    dfs(x-1, y)
    dfs(x+1, y)
    dfs(x, y-1)
    dfs(x, y+1)

N = int(rl())
graph = []
all_height = []
for _ in range(N):
    li = list(map(int, rl().split()))
    graph.append(li)
    all_height += li

all_height = list(range(max(all_height)+1))
cnt_arr = []

for height in all_height:
    visited = [[False] * N for _ in range(N)]
    temp_graph = [[1] * N for _ in range(N)]
    cnt = 0
    for i in range(N):
        for j in range(N):
            if graph[i][j] <= height:
                temp_graph[i][j] = 0
    for i in range(N):
        for j in range(N):
            if not visited[i][j] and temp_graph[i][j] == 1:
                dfs(i, j)
                cnt += 1
    cnt_arr.append(cnt)
print(max(cnt_arr))