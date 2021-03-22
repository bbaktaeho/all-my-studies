A, B, C, N = map(int, input().split())
def isPerfect():
    for i in range(0, N // A + 1):
        for j in range(0, N // B + 1):
            for k in range(0, N // C + 1):
                if A*i + B*j + C*k == N: return True
    return False

print(1 if isPerfect() else 0)
