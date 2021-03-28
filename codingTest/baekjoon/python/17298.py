N = int(input())
arr = list(map(int, input().split()))
# def NGE()

result = ""
for i in range(len(arr)):
    maxValue = max(arr[i:])
    result += str(-1 if arr[i] >= maxValue else maxValue) + " "
print(result)