while True:
    arr = list(map(int, input().split()))
    if len(arr) == 1: break
    arr.pop()
    arr.sort()
    count = 0
    for num in arr:
        if num*2 in arr: count += 1
    print(count)