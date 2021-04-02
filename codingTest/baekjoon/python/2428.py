N = int(input())
file_list = sorted(list(map(int, input().split())))

def bs(file_size, idx):
    start, mid, end = 0, 0, idx - 1
    while start <= end:
        mid = (start + end) // 2
        if file_list[mid] < file_size * 0.9: start = mid + 1
        else: end = mid - 1
    return idx - start

result = 0
for i in range(1, N): result += bs(file_list[i], i)
print(result)