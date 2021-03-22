from itertools import combinations
import math
arr = list(map(int, input().split()))
multipleList = []
for a,b,c in combinations(arr, 3):
    multipleList.append(math.lcm(a,b,c))
print(min(multipleList))
