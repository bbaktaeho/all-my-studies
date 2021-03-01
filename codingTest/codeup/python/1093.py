input()
arr = input().split()
result = [0 for _ in range(23)]
for i in arr:
    result[int(i) - 1] += 1
print(" ".join(map(str, result)))
