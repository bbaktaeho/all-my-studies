n = int(input())
for i in range(-n+1, n):
    print('*' * (n - abs(i)) + " " * abs(i) * 2 + "*" * (n - abs(i)))