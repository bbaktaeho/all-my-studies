maxValue = 0
maxLocation = 0
for i in range(1, 10):
    value = int(input())
    if maxValue < value:
        maxLocation = i
        maxValue = value
print(maxValue, maxLocation, sep="\n")