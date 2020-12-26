import random

def selectionSort(arr):
    arrLen = len(arr)
    for i in range(arrLen-1):
        minIndex = i
        for j in range(i+1, arrLen):
            if arr[minIndex] > arr[j]: minIndex = j
        arr[i], arr[minIndex] = arr[minIndex], arr[i]
    return arr

arr = random.sample(range(100), 20)
print(selectionSort(arr))