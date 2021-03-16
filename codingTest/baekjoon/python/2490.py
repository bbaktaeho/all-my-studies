for _ in range(3):
    a = sum(list((map(int, input().split()))))
    if a == 4: print('E')
    elif a == 3: print("A")
    elif a == 2: print("B")
    elif a == 1: print("C")
    elif a == 0: print("D")
