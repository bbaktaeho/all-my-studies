import sys; input = sys.stdin.readline
import heapq

q = []
for _ in range(int(input())):
    x = int(input())
    if x == 0:
        if not q: print(0)
        else: print(heapq.heappop(q)[1])
    else: heapq.heappush(q, (abs(x), x))
