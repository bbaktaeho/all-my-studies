arr = [0 for _ in range(12)]
arr[1], arr[2], arr[3], arr[4] = 1, 2, 4, 7
for i in range(5, 12):
    arr[i] = arr[i-3] + arr[i-2] + arr[i-1]
for _ in range(int(input())): 
    print(arr[int(input())])