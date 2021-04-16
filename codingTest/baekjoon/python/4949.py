import sys; input = sys.stdin.readline

def solution(string_stack):
    stack = []
    while string_stack:
        c = string_stack.pop()
        if c not in ('(', ')', '[', ']'): continue
        if c == ')' or c == ']': stack.append(c)
        elif not stack: return 'no'
        elif (c == '(' and stack[-1] != ')') or (c == '[' and stack[-1] != ']'): return 'no'
        else: stack.pop()
    return 'no' if stack else 'yes'
while True:
    string = input().rstrip()
    if string == '.': break # * 종료
    print(solution(list(string)))