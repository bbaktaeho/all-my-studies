from sys import stdin
from queue import Queue

for _ in range(int(stdin.readline())):
    N, M = map(int, stdin.readline().split())
    arr = list(map(int, stdin.readline().split()))
    values = sorted(arr)
    q = Queue()
    for i, v in enumerate(arr):
        q.put([i, v])
    count = 0
    while True:
        item = q.get()
        if values[len(values) - 1] == item[1]:
            count += 1
            values.pop()
            if item[0] == M:
                print(count)
                break
        else:
            q.put(item)