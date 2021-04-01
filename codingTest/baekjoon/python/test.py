N = int(input())
arr = [0] * (N+1)
arr[0] = 1
arr[1] = 1
for i in range(2, N+1):
    arr[i] = arr[i-2] + arr[i-1]
print(arr[N] % 10007)