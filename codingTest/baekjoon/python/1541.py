import re

solution = input()
numArr = list(map(int, re.findall("-?\d+", solution)))
minusIdxArr = []
for i, num in enumerate(numArr):
    if num < 0:
        numArr[i] = abs(num)
        minusIdxArr.append(i)
if len(minusIdxArr):
    print(sum(numArr[: minusIdxArr[0]]) - sum(numArr[minusIdxArr[0] :]))
else:
    print(sum(numArr))