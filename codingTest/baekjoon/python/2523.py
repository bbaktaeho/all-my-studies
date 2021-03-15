n = int(input())
for i in range(1, 2 * n):
    if i > n: print('*' * (i-(i-n) * 2))
    else: print('*'*i)