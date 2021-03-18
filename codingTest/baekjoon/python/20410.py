from itertools import permutations
m, seed, x1, x2 = map(int, input().split())
for a, c in permutations(range(m), 2):
    if x2 == (a * x1 + c) % m and x1 == (a * seed + c) % m:
        print(a, c)
        break