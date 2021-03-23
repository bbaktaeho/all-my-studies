# level, X = 0, int(input())
# while X > 0:
#     level += 1
#     X -= level
# if level % 2 == 0: print("%d/%d" % (level + X, 1 + (-X)))
# else: print("%d/%d" % (1 + (-X), level + X))

X = int(input())
origin = X
i = 1 # 피라미드 층 수
while X > i:
    X -= i
    i+=1
turn = origin - sum(range(1, i)) # 몇 번째 인지
if i % 2 != 0:
    print("%d/%d" % ((i-turn+1), turn))
else:
    print("%d/%d" % (turn, (i-turn+1)))