stack = []
ps = input()
res = 0
for i in range(len(ps)):
    if ps[i] == '(': stack.append(i)
    else:
        # 닫는 괄호가 레이저
        if i-1 == stack.pop(): res += len(stack)
        # 닫는 괄호가 쇠막대기
        else: res += 1
print(res)