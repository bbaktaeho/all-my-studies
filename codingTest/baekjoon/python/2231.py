n = int(input())
for i in range(1, 1000001):
    result = i
    total = result
    if result >= n:
        print(0)
        break
    while i:
        total += i % 10
        i //= 10
    if total == n:
        print(result)
        break