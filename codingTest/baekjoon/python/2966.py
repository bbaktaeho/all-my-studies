sang = "ABC"
chang = "BABC"
hyeon = "CCAABB"

def who(idx):
    if idx == 0: return "Adrian"
    elif idx == 1: return "Bruno"
    elif idx == 2: return "Goran"

N = int(input())
result = [0] * 3
for i, answer in enumerate(input()):
    if sang[i % 3] == answer: result[0] += 1
    if chang[i % 4] == answer: result[1] += 1
    if hyeon[i % 6] == answer: result[2] += 1
m = max(result)
print(m)
for i in range(len(result)):
    if result[i] == m: print(who(i))
