trophy = []
for _ in range(int(input())):
    trophy.append(int(input()))

def isVisibleCount(start, end, arrow):
    count = 1
    maxTrophy = trophy[start]
    for i in range(start, end, arrow):
        if maxTrophy < trophy[i+arrow]: 
            maxTrophy = trophy[i+arrow]
            count += 1
    return count

print(isVisibleCount(0, len(trophy)-1, 1))
print(isVisibleCount(len(trophy)-1, 0, -1))