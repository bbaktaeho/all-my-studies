N = int(input())
arr = [0 for _ in range(1001)]
arr[1], arr[2] = 1, 3
for i in range(3, N+1): 
    arr[i] = 2 * arr[i-2] + arr[i-1]
print(arr[N] % 10007)