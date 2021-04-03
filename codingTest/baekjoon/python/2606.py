# def dfs(v):
#     global cnt
#     if v < 0 or v > N or visited[v]:
#         return
#     visited[v] = True
#     cnt += 1
#     for i in comArr[v]:
#         dfs(i)


# N = int(input())
# comArr = [[] for _ in range(N + 1)]
# for _ in range(int(input())):
#     x, y = map(int, input().split())
#     comArr[x].append(y)
#     comArr[y].append(x)

# cnt = -1
# visited = [False] * (N + 1)
# dfs(1)
# print(cnt)


import sys
input = sys.stdin.readline

N = int(input())
v_arr = [[] for _ in range(N + 1)]
visited = [False] * (N + 1)
cnt = 0
for _ in range(int(input())):
    x, y = map(int, input().split())
    v_arr[x].append(y)
    v_arr[y].append(x)

def dfs(v):
    global cnt
    if visited[v]: return
    visited[v] = True
    cnt += 1
    for next_v in v_arr[v]: dfs(next_v)

dfs(1)
print(cnt - 1)