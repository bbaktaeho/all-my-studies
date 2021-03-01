n = int(input())
arr = []
for _ in range(n):
    x, y = map(int, input().split())
    arr.append((x, y))

result = sorted(arr)
s = ""
for i in result:
    s += "%d %d\n" % (i[0], i[1])
print(s)