total = 0
for i in input().split():
    total += int(i) ** 2
print(total % 10)