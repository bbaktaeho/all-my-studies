# from collections import deque

# N, K = map(int, input().split())
# q = deque([i for i in range(1, N + 1)])
# result = []
# i = 1
# while len(result) != N:
#     if i == K:
#         result.append(q.popleft())
#         i = 1
#     else:
#         q.append(q.popleft())
#         i += 1
# print("<" + ", ".join(list(map(str, result))) + ">")

# 콜렉션 없이 풀기
N, K = map(int, input().split())
arr = [str(i) for i in range(1, N + 1)]
result = []
i = 0
while arr:
    i = (i + K - 1) % len(arr)
    result.append(arr.pop(i))
print("<" + ", ".join(result) + ">")
