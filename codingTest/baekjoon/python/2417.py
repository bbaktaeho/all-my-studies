N = int(input())

def binarySearch(N):
    start, end, mid = 1, N // 2, 0
    while start <= end:
        mid = (start + end) // 2
        result = mid * mid
        if result > N: end = mid - 1
        elif result < N: start = mid + 1
        else: break
    if N > (mid * mid): mid += 1
    return mid

print(binarySearch(N))