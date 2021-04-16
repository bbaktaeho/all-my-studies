import sys; input = sys.stdin.readline

N, L = map(int, input().split())

for num in sorted(map(int, input().split())):
    if L >= num: L += 1
    else: break
print(L)