pictures = []
for _ in range(int(input())):
    picture = []
    for _ in range(5): picture.append(input())
    pictures.append(picture)

pair = {}

for i in range(len(pictures)-1):
    for j in range(i+1, len(pictures)):
        count = 0
        for k in range(5):
            for z in range(7):
                if pictures[i][k][z] != pictures[j][k][z]:
                    count += 1
        pair[str(i+1)+" "+str(j+1)] = count

print(min(pair.keys(), key=lambda x: pair[x]))
