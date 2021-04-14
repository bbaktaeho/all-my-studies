import sys; input = sys.stdin.readline

result = 0
for _ in range(int(input())): 
    w_stack = list(input().rstrip())
    gw_stack = []
    while w_stack:
        c = w_stack.pop()
        if gw_stack and gw_stack[-1] == c: gw_stack.pop()
        else: gw_stack.append(c)
    if not gw_stack: result += 1

print(result)
