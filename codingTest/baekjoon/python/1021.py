import sys; input = sys.stdin.readline
from collections import deque

def move_left(n):
    global count
    while q[0] != n:
        count += 1
        q.append(q.popleft())

def move_right(n):
    global count
    while q[0] != n:
        count += 1
        q.appendleft(q.pop())

N, M = map(int, input().split())
q = deque([i for i in range(1, N+1)])
count = 0
local_num_list = list(map(int, input().split()))

for num in local_num_list: # 2 9 5
    if q.index(num) > len(q) // 2: # 6 7 8 10 1 3 4   8
        move_right(num) # * step_2
    else: move_left(num) # * step_3
    q.popleft() # * step_1
print(count)
