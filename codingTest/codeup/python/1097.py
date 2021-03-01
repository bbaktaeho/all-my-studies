arr = []
for _ in range(19):
    arr.append(list(map(int, input().split())))

n = int(input())
pointList = []
while n:
    pointList.append(list(map(int, input().split())))
    n -= 1

for point in pointList:
    for l in arr:
        l[point[1] - 1] = int(not l[point[1] - 1])
    arr[point[0] - 1] = list(map(lambda x: int(not x), arr[point[0] - 1]))

for i in arr:
    print(" ".join(map(str, i)))