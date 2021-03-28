from collections import deque
N, K = map(int ,input().split())
arr = deque([i for i in range(1, N+1)])
result = []
idx = 0
while arr:
    if idx == K - 1: 
        result.append(arr.popleft())
        idx = 0
    else:
        idx += 1
        arr.append(arr.popleft())
print("<" + ", ".join(map(str, result)) + ">")
