# N, arr1, M, arr2 = (int(input()), input().split(), int(input()), input().split())
# arr1 = set(arr1)

# for i in arr2:
#     if i in arr1:
#         print(1)
#     else:
#         print(0)

N, arr1, M, arr2 = (int(input()), {i: 1 for i in map(int, input().split())}, int(input()), input().split())
for i in list(map(int, arr2)):
    print(arr1.get(i, 0))


