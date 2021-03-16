alphaList = [-1] * 26
for i, alpha in enumerate(input()):
    idx = ord(alpha) - ord('a')
    if alphaList[idx] == -1: alphaList[ord(alpha) - ord('a')] = i
print(*alphaList)
