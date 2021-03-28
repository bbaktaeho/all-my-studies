import sys
from collections import deque
input = sys.stdin.readline

left = list(input().strip())
right = deque([])

def action(C, value = ""):
    if C == 'L' and len(left) > 0:
        right.appendleft(left.pop())
    elif C == 'D' and len(right) > 0:
        left.append(right.popleft())
    elif C == 'B' and len(left) > 0:
        left.pop()
    elif C == 'P': left.append(value)

for _ in range(int(input())): 
    action(*input().strip().split())
print("".join(left) + "".join(right))

