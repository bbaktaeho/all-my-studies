a, b, c = map(int, input().split())
while c > 1:
    a += b
    c -= 1
print(a)