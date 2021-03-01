import sys

stack = []
for _ in range(int(sys.stdin.readline())):
    arr = sys.stdin.readline().split()
    if len(arr) == 2:
        stack.append(arr[1])
    else:
        if arr[0] == "pop":
            print(-1 if len(stack) == 0 else stack.pop())
        elif arr[0] == "size":
            print(len(stack))
        elif arr[0] == "empty":
            print(1 if len(stack) == 0 else 0)
        elif arr[0] == "top":
            print(-1 if len(stack) == 0 else stack[len(stack) - 1])
