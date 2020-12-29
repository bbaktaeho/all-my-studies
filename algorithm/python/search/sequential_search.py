from random import *

def sequentialSearch(data, search):
    for i in range(len(data)):
        if search == data[i]: return i
    return -1 

arr = []
for i in range(10):
    arr.append(randint(1, 20))

print(arr)
print("index: ", sequentialSearch(arr, 6))