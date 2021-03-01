import sys

dq = []
for _ in range(int(sys.stdin.readline())):
    arr = sys.stdin.readline().split()
    if arr[0] == "push_front":
        dq.insert(0, arr[1])
    elif arr[0] == "push_back":
        dq.append(arr[1])
    elif arr[0] == "pop_front":
        print(-1 if len(dq) == 0 else dq.pop(0))
    elif arr[0] == "pop_back":
        print(-1 if len(dq) == 0 else dq.pop())
    elif arr[0] == "size":
        print(len(dq))
    elif arr[0] == "empty":
        print(1 if len(dq) == 0 else 0)
    elif arr[0] == "front":
        print(-1 if len(dq) == 0 else dq[0])
    elif arr[0] == "back":
        print(-1 if len(dq) == 0 else dq[len(dq) - 1])
