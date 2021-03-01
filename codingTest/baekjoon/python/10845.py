import sys

q = []
for _ in range(int(sys.stdin.readline())):
    arr = sys.stdin.readline().split()
    if len(arr) == 2:
        q.append(arr[1])
    else:
        if arr[0] == "pop":
            print(-1 if len(q) == 0 else q.pop(0))
        elif arr[0] == "size":
            print(len(q))
        elif arr[0] == "empty":
            print(1 if len(q) == 0 else 0)
        elif arr[0] == "front":
            print(-1 if len(q) == 0 else q[0])
        elif arr[0] == "back":
            print(-1 if len(q) == 0 else q[len(q) - 1])
