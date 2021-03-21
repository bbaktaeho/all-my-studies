N = int(input())
load = list(map(int, input().split()))
height = 0
maxHeight = 0
for i in range(len(load)-1):
    if load[i] < load[i+1]: 
        height += (load[i+1] - load[i])
    else: 
        maxHeight = max(maxHeight, height)
        height = 0
print(max(maxHeight, height))