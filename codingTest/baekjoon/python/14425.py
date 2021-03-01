# N, M = map(int, input().split())
# S = set()
# for _ in range(N):
#     S.add(input())
# count = 0
# for _ in range(M):
#     if input() in S:
#         count += 1
# print(count)

import sys
N, M = map(int, input().split())
S = {sys.stdin.readline() for _ in range(N)}
count = 0
for _ in range(M):
    if sys.stdin.readline() in S:
        count += 1
print(count)
