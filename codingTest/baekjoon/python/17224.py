# N, L, K = map(int, input().split())
# total = 0
# arr = []
# for _ in range(N):
#     if K == 0:
#         break
#     sub1, sub2 = map(int, input().split())
#     if sub1 <= L and sub2 <= L:
#         total += 140
#         K -= 1
#     else:
#         arr.append(sub1)

# if K > 0:
#     for sub1 in sorted(arr):
#         if K > 0 and sub1 <= L:
#             K -= 1
#             total += 100
#         else:
#             break

# print(total)
N, L, K = map(int, input().split())
quizList = []
for _ in range(N): quizList.append(tuple(map(int, input().split())))
quizList.sort(key=lambda x: x[1])
totalScore = 0
for quiz in quizList:
    if K == 0: break
    if quiz[0] > L: continue
    if quiz[1] <= L: 
        K -= 1
        totalScore += 140
    elif quiz[0] <= L:
        K -= 1
        totalScore += 100
print(totalScore)