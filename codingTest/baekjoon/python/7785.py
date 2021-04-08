import sys
input = sys.stdin.readline

N = int(input())
worker_list = dict()

for _ in range(N): 
    name, active = input().split()
    if active == 'leave': del worker_list[name]
    else: worker_list[name] = 1

print(*sorted(list(worker_list.keys()), reverse=True), sep='\n')