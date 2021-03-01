l = []
for _ in range(int(input())):
    l.append(input().split())

for item in l:
    for i, v in enumerate(item):
        item[i] = "".join(reversed(v))
    for i in item:
        print(i, end=" ")
    print()

# import sys
# input = sys.stdin.readline

# reverse__str=[]
# N=int(input())
# for i in range(N):
#     __str=input().split()
#     for arr in __str:
#         reverse__str.append(arr[::-1])
# print(' '.join(reverse__str))