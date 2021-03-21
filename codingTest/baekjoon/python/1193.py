level, X = 0, int(input())
while X > 0:
    level += 1
    X -= level
if level % 2 == 0: print("%d/%d" % (level + X, 1 + (-X)))
else: print("%d/%d" % (1 + (-X), level + X))