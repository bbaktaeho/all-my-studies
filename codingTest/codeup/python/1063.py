a, b, c = map(int, input().split())
minAB = a if a < b else b
maxData = c if c < minAB else minAB
print(maxData)
# print(max(a, b, c))