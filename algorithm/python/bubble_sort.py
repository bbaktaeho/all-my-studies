arr = [5,2,3,1]
arrLength = len(arr)

for i in range(0, arrLength-1):
    re = arrLength - 1 - i
    for j in range(0, re):
        if arr[j] > arr[j+1]: arr[j+1], arr[j] = arr[j], arr[j+1]

print(arr)