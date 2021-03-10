N, M = map(int, input().split())
A = list(map(int, input().split()))
B = list(map(int, input().split()))
for b in B:
    for i in range(N):
        if A[i] < b: continue
        if A[i] >= b: 
            A[i] -= b
            break
print(sum(A))