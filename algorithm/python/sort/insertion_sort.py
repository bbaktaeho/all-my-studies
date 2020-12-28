import random

def insertionSort(arr):
    for i in range(0, len(arr)-1):
        for j in range(i+1, 0, -1):
            if arr[j] < arr[j-1]: arr[j], arr[j-1] = arr[j-1], arr[j]
            else: break
    return arr

arr = random.sample(range(50), 10)
print(insertionSort(arr))