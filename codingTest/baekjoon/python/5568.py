from itertools import permutations
import sys
input = sys.stdin.readline

N, K = int(input()), int(input())
number_list = []
result = set()
for _ in range(N): number_list.append((input().strip()))
for p in permutations(number_list, K): result.add(("".join(p)))
print(len(result))