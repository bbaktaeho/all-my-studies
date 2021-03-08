# N = int(input())

# sits = input()
# cups = 0
# couple = 0
# for i in range(len(sits)):
#     if sits[i] == 'S':
#         if i == len(sits) -1: cups += 2
#         else: cups += 1
#     elif couple != 1: couple += 1
#     else:
#         couple = 0
#         if i == len(sits) - 1: cups += 2
#         else: cups += 1
# print(cups if N >= cups else N)

N = int(input())
cups = len(input().replace('LL', 'S'))+1
print(cups if N >= cups else N)
