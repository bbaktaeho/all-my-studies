import sys
from itertools import combinations
input = sys.stdin.readline

nList = []
for _ in range(9): nList.append(int(input()))
nList.sort()

for i in combinations(nList, 7):
    if sum(i) == 100:
        print(*i, sep='\n')
        break