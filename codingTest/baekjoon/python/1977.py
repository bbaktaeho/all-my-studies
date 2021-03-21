import math

M = int(input())
N = int(input())
total = 0
minNum = 0
for num in range(M, N+1):
    root = math.sqrt(num)
    if root == int(root): 
        total += num
        if not minNum: minNum = num
if total == 0: print(-1)
else: print(total, minNum, sep='\n')