import sys
input = sys.stdin.readline

for _ in range(int(input())):
    h, w, n = map(int, input().split())
    y = n % h
    x = n // h
    Y = str(y) if y else str(h)
    x = x if y == 0 else x + 1
    X = "0" + str(x) if len(str(x)) == 1 else str(x)
    print(Y + X)