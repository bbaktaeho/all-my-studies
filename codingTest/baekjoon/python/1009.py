for _ in range(int(input())):
    a, b = map(int, input().split())
    com = pow(a, b, 10)
    if com == 0: print(10)
    else: print(com)