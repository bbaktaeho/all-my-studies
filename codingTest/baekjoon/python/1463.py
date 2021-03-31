# N = int(input())
# arr = [0] * (N + 1)
# for i in range(2, N+1):
#     compare = set([arr[i-1]])
#     if i % 3 == 0: compare.add(arr[i//3])
#     if i % 2 == 0: compare.add(arr[i//2])
#     arr[i] = 1 + min(compare)
# print(arr[-1])

memory = dict()
def sol(n):
    if n in memory: return memory[n]
    elif n < 2: result = 0
    else:
        a = sol(n // 3) + n % 3 + 1
        b = sol(n // 2) + n % 2 + 1
        result = min(a, b)
    memory[n] = result
    return result

print(sol(int(input())))