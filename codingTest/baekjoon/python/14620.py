n = int(input())
board = [list(map(int, input().split())) for _ in range(n)]

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def getPrice(f1, f2, f3):
    flowers = set()
    p = 0
    for flower in (f1, f2, f3):
        x = flower // n
        y = flower % n
        if x == 0 or y == 0 or x == n-1 or y == n-1:
            return 3001

        flowers.add((x, y))
        p += board[x][y]
        for i in range(4):
            flowers.add((x+dx[i],y+dy[i]))
            p += board[x+dx[i]][y+dy[i]]
    if len(flowers) != 15:
        return 3001
    return p

price = 3001
for i in range(n**2):
    for j in range(i+2, n**2):
        for k in range(j+2, n**2):
            price = min(price, getPrice(i,j,k))
print(price)