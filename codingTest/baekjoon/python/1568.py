N = int(input())
K = 1
sec = 0
while N > 0:
    sec += 1
    if N < K: K = 1
    N -= K
    K += 1
print(sec)
