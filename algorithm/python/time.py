def bubbleSort(data):
    for i in range(len(data)-1):
        flag = False
        for j in range(len(data)-1-i):
            if data[j] > data[j+1]: data[j], data[j+1] = data[j+1], data[j]; flag = True
        if flag == False: break
    return data
print(bubbleSort([5,8,1,5,3,0,2,6]))

def quickSort(data):
    if len(data) <= 1: return data
    pivot = data[0]
    left, right = [], []
    for i in data[1:]:
        if pivot > i: left.append(i)
        else: right.append(i)
    return quickSort(left) + [pivot] + quickSort(right)

def merge(left, right):
    result = []
    lp, rp = 0, 0
    while len(left) > lp and len(right) > rp:
        if left[lp] < right[rp]: result.append(left[lp]); lp += 1
        else: result.append(right[rp]); rp += 1
    while len(left) > lp: result.append(left[lp]); lp += 1
    while len(right) > rp: result.append(right[rp]); rp += 1
    return result

def mergeSort(data):
    if len(data) <= 1: return data
    mid = int(len(data)/2)
    left = mergeSort(data[:mid]);
    right = mergeSort(data[mid:]);
    return merge(left, right)
    
import random
import time

arr1 = random.sample(range(100000), 10000)
arr2 = arr1[:]
arr3 = arr1[:]

start = time.time(); bubbleSort(arr1); print("time: ", time.time()-start)
start = time.time(); quickSort(arr2); print("time: ", time.time()-start)
start = time.time(); mergeSort(arr3); print("time: ", time.time()-start)