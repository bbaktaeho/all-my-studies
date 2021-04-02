N = int(input())
n_arr = sorted(list(map(int, input().split())))
M = int(input())
m_arr = list(map(int, input().split()))
n_count = dict()
for n in n_arr:
    try: n_count[n] += 1
    except : n_count[n] = 1

def bs(f, N):
    start, mid, end = 0, 0, N-1
    while start <= end:
        mid = (start + end) // 2
        if n_arr[mid] < f: start = mid + 1
        elif n_arr[mid] > f: end = mid - 1
        else: return n_count[f]
    return 0

result = []
for m in m_arr: result.append(bs(m, N))
print(*result)