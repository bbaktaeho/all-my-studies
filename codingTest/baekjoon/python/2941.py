# s = input()
# sArr = list(s)
# sLength = len(s)
# patternList = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]
# resultStr = ""
# i = 0
# while i < sLength:
#     resultStr += s[i]
#     for p in patternList:
#         idx = resultStr.find(p)
#         if idx != -1:
#             resultList = list(resultStr)
#             resultList[idx : idx + len(p)] = ["0"]
#             resultStr = "".join(resultList)
#     i += 1

# print(len(resultStr))

# ! 존나 어이없다잉
# s = input()
# print(len(s) - sum(s.count(a) for a in ["=", "-", "lj", "nj", "dz="]))

# ! 이것도 존나 어이없네
s = input()
patternList = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]
for pattern in patternList:
    s = s.replace(pattern, "0")
print(len(s))