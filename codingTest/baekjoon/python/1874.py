from sys import stdin

N = int(stdin.readline())
arr = []
for _ in range(N):
    arr.append(int(stdin.readline()))
arr.reverse()

stack = []
result = []
for i in range(1, N + 1):
    stack.append(i)
    result.append("+")
    while len(stack) != 0 and stack[-1] == arr[-1]:
        stack.pop()
        arr.pop()
        result.append("-")
if len(arr) != 0:
    print("NO")
else:
    print("\n".join(result))
