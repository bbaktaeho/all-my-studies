import sys; input = sys.stdin.readline

while True:
    stack = []
    string = input().rstrip()
    if string == '.': break
    string_stack = list(string)
    while string_stack:
        c = string_stack.pop()
        if c not in ('(', ')', '[', ']'): continue
        if c == ')' or c == ']': stack.append(c)
        elif (not stack) or (c == '(' and stack[-1] != ')') or (c == '[' and stack[-1] != ']'):
            print('no')
            break
        else: stack.pop()
    if not stack: print('yes')
    else: print('no')