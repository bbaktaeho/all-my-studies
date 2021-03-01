# def isSame(arr, N):
#     for i in range(N - 1):
#         if arr[i] != arr[i + 1]:
#             return False
#     return True

def isSame(arr):
    if len(set(arr)) == 1:
        return True
    return False


T = int(input())
while T:
    N = int(input())
    arrC = list(map(int, input().split()))

    count = 0
    while True:
        for i in range(N):
            if arrC[i] % 2 != 0:
                arrC[i] += 1
        if isSame(arrC):
            break
        arrPlus = list(map(lambda x: x // 2, arrC))
        for i in range(N):
            arrC[i] -= arrPlus[i]
        arrC[0] += arrPlus[N - 1]
        for i in range(N - 1):
            arrC[i + 1] += arrPlus[i]
        count += 1
    print(count)
    T -= 1
