N, M = map(int, input().split())
cl = list(map(int, input().split()))
result = 0
for i in range(N-2):
    for j in range(1+i, N-1):
        for k in range(1+j, N):
            total = cl[i] + cl[j] + cl[k]
            if total <= M:
                result = max(result, total)
print(result)