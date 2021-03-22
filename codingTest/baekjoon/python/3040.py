from itertools import combinations
import sys
input = sys.stdin.readline
arr = []
for _ in range(9):
    arr.append(int(input()))
for seven in combinations(arr, 7):
    if 100 == sum(seven):
        print(*seven, sep="\n")
        break