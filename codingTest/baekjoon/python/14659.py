N = int(input())
bongs = list(map(int, input().split()))
cur, next = 0, 1
curKill, maxKill = 0, 0
while next < N:
    if bongs[cur] > bongs[next]:
        curKill += 1
        next += 1
    else:
        maxKill = max(maxKill, curKill)
        curKill = 0
        cur = next
        next += 1
print(max(curKill, maxKill))
