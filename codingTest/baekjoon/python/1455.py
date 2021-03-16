total = 0
maxPeople = 0
for i in range(1,5):
    off, on = map(int, input().split())
    total += (on - off)
    maxPeople = max(maxPeople, total)
print(maxPeople)