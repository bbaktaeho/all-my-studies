# def quick_sort(data):
#     if len(data) <= 1: return data

#     pivot = data[0]
#     # 컴프리헨션으로 해보기
#     left = [item for item in data[1:] if pivot > item]
#     right = [item for item in data[1:] if pivot <= item]

#     # left, right = list(), list()
#     # for i in range(1, len(data)):
#     #     if pivot > data[i]: left.append(data[i])
#     #     else: right.append(data[i])

#     return quick_sort(left) + [pivot] + quick_sort(right)

def quickSort(data):
    if len(data) <= 1: return data
    left, right = [], []
    pivot = data[0]
    for i in data[1:]: 
        if pivot < i: right.append(i)
        else: left.append(i)
    return quickSort(left) + [pivot] + quickSort(right)

    
import random
randomList = random.sample(range(100), 10)
print(quickSort(randomList))