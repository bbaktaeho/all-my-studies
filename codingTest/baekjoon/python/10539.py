n, b = int(input()), list(map(int, input().split()))

result = [b[0]]
for i in range(1, n):
    result.append(b[i] * (i + 1) - sum(result))

print(" ".join(map(str, result)))
