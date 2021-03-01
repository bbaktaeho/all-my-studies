a, b, c = map(int, input().split())
date = 1
while date % a != 0 or date % b != 0 or date % c != 0:
    date += 1
print(date)