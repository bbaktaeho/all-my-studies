N = int(input())

def binarySearch(N):
    start, mid, end = 1, 0, N // 2
    while start <= end:
        mid = (start + end) // 2
        result = mid * mid
        if result > N: end = mid - 1
        elif result < N: start = mid + 1
        else: break
    return mid

print(binarySearch(N))