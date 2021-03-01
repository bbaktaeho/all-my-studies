import sys
import heapq

rl = sys.stdin.readline
wr = sys.stdout.write

N = int(rl())
heap = []
for _ in range(N):
    x = int(rl())
    if x == 0:
        if not heap:
            wr(str(0) + "\n")
        else:
            wr(str(heapq.heappop(heap)) + "\n")
    else:
        heapq.heappush(heap, x)