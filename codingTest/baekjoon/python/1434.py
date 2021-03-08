N, M = map(int, input().split())
A = [a for a in map(int, input().split())]
B = [b for b in map(int, input().split())]
for b in B:
    for i in range(len(A)):
        if A[i] >= b:
            A[i] -= b
            break
print(sum(A))
