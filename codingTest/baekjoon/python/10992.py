n = int(input())
flag = -1
for i in range(1, n+1):
    print(" " * (n-i), end="")
    if i == 1: print("*")
    elif n == i: print("*" * (n * 2 - 1))
    else:
        flag += 1
        print("*" + " " * (i-1 + flag) + "*")