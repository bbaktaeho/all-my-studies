N = int(input())
mod = N % 5
if mod == 0: print(N // 5)
elif mod == 4:
    if N - 9 < 0: print(-1)
    else: print((N-9) // 5 + 3)
elif mod == 3: print(N // 5 + 1)
elif mod == 2:
    if N == 7: print(-1)
    else: print((N - 12) // 5 + 4)
elif mod == 1: print((N - 6) // 5 + 2)