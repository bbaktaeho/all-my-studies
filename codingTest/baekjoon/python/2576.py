total = 0
minNum = 100
for _ in range(7):
    n = int(input())
    if n % 2 == 1: 
        total += n
        minNum = min(minNum, n)
if total == 0: print(-1)
else: print(total, minNum, sep='\n')