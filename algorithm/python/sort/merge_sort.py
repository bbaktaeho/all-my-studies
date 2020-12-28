def merge(left, right):
    result = []
    lp, rp = 0, 0
    while len(left) > lp and len(right) > rp:
        if left[lp] > right[rp]: result.append(right[rp]); rp += 1
        else: result.append(left[lp]); lp += 1
    while len(left) > lp: result.append(left[lp]); lp += 1
    while len(right) > rp: result.append(right[rp]); rp += 1
    return result
    
def mergeSort(data):
    if len(data) <= 1: return data
    mid = int(len(data)/2)
    left = mergeSort(data[:mid])
    right = mergeSort(data[mid:])
    return merge(left, right)
    
import random
arr = random.sample(range(50), 10)
print(mergeSort(arr))
