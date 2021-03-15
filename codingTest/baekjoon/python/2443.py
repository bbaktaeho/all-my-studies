n = int(input())
for i in range(0,n):
    print(" " * i + '*' * (n * 2 - ((i * 2)+1)))