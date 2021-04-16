import sys; input = sys.stdin.readline

N, M = map(int, input().split())
city = [[] for _ in range(N+1)]
boom_city = set()

for _ in range(M):
    x, y = map(int, input().split())
    city[x].append(y)
    city[y].append(x)

K = int(input())
dest_city = list(map(int, input().split()))