# n, m = map(int, input().split())
# name1, name2 = input().split()

# alpha = [3, 2, 1, 2, 4, 3, 1, 3, 1, 1, 3, 1, 3, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1]
# minLength = min(n, m)
# total = ""
# for i in range(minLength):
#     total += name1[i] + name2[i]
# total += name1[minLength:] + name2[minLength:]
# result = list(map(lambda x: alpha[ord(x) - 65], total))
# while len(result) > 2:
#     arr = []
#     for i in range(0, len(result) - 1):
#         plus = result[i] + result[i + 1]
#         arr.append(plus % 10 if plus >= 10 else plus)
#     result = arr

# print("{}%".format(int(str(result[0]) + str(result[1]))))
# 28776kb	68ms

n, m = map(int, input().split())
name1, name2 = input().split()

alpha = [3, 2, 1, 2, 4, 3, 1, 3, 1, 1, 3, 1, 3, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1]
minLength = min(n, m)
total = ""
for i in range(minLength):
    total += name1[i] + name2[i]
total += name1[minLength:] + name2[minLength:]
result = [alpha[ord(i) - ord("A")] for i in total]

for i in range(len(result) - 2):
    for j in range(len(result) - 1 - i):
        result[j] += result[j + 1]

print("{}%".format(result[0] % 10 * 10 + result[1] % 10))