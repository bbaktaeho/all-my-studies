N, L, K = map(int, input().split())
total = 0
arr = []
for _ in range(N):
    if K == 0:
        break
    sub1, sub2 = map(int, input().split())
    if sub1 <= L and sub2 <= L:
        total += 140
        K -= 1
    else:
        arr.append(sub1)

if K > 0:
    for sub1 in sorted(arr):
        if K > 0 and sub1 <= L:
            K -= 1
            total += 100
        else:
            break

print(total)
