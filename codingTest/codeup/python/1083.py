n = int(input())
result = ""
for i in range(1, n + 1):
    result += ("X" if i % 3 == 0 else str(i)) + " "
print(result)