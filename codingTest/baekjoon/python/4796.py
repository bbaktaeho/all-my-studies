import sys
input = sys.stdin.readline
cnt = 1
while True:
    L, P, V = map(int, input().split())
    if L + P + V == 0: break
    print("Case %d: %d" % (cnt, ((V // P) * L) + ((V % P) if (V % P) <= L else L)))
    cnt += 1