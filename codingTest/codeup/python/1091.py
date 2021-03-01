a, b, c, d = map(int, input().split())
while d > 1:
    a = a * b + c
    d -= 1
print(a)