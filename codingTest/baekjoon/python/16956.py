r, c = map(int, input().split())
graph = [list(input()) for _ in range(r)]

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
ck = False

for i in range(r):
    for j in range(c):
        if graph[i][j] == "W":
            for n in range(4):
                newI, newJ = i + dx[n], j + dy[n]
                if newI < 0 or newI >= r or newJ < 0 or newJ >= c:
                    continue
                if graph[newI][newJ] == 'S':
                    ck = True
if ck:
    print(0)
else:
    print(1)
    for i in range(r):
        for j in range(c):
            if graph[i][j] == '.':
                graph[i][j] = 'D'
for row in graph:
    print("".join(row))