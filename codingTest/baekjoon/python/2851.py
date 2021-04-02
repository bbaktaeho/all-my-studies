import sys
input = sys.stdin.readline

mushroom_list = []
for _ in range(10): mushroom_list.append(int(input()))

score = 0
score_list = []
for i in range(10):
    score += mushroom_list[i]
    if score >= 100:
        score_list.append(score)
        score_list.append(score - mushroom_list[i])
        break

score_list.sort()
if len(score_list) == 0: print(sum(mushroom_list))
else: print(score_list[1] if score_list[1] - 100 <= 100 - score_list[0] else score_list[0])