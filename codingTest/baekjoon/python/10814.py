n = int(input())
l = []
for _ in range(n):
    x, y = input().split()
    l.append((int(x), y))

result = sorted(l, key=lambda x: x[0])
for i in result:
    print(i[0], i[1])