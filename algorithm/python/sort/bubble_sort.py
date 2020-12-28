import random

def bubbleSort(arr):
    for i in range(0, len(arr)-1):
        isSwap = False
        for j in range(0, len(arr) - 1 - i):
            if arr[j] > arr[j+1]: 
                arr[j+1], arr[j] = arr[j], arr[j+1]
                isSwap = True
        if isSwap == False: break 
    return arr

arr = random.sample(range(100), 20)
print(bubbleSort(arr))