import sys
input = sys.stdin.readline

mushroom_list = []
for _ in range(10): mushroom_list.append(int(input()))

score = 0
flag = False
for i in range(10):
    score += mushroom_list[i]
    if score >= 100:
        pre_score = score - mushroom_list[i]
        print(score if score - 100 <= 100 - pre_score else pre_score)
        flag = True
        break

if not flag: print(score)