def yesOrNo(s):
    stack = []
    for i in s:
        if i == "(":
            stack.append(i)
        else:
            if len(stack) == 0:
                return "NO"
            else:
                stack.pop()
    return "YES" if len(stack) == 0 else "NO"


for _ in range(int(input())):
    result = "YES"
    stack = []
    s = input()
    if s[0] == ")":
        print("NO")
    else:
        print(yesOrNo(s))