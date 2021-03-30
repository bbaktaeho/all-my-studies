import sys
input = sys.stdin.readline

N, M = map(int, input().strip().split())
board = []
for _ in range(M):
    board.append(list(input().strip()))

cnt = 0

for i in range(N):
    for j in range(M):
        if board[i].count('X') == 0:
            X_check = False
            for k in range(N):
                if board[k][j] == 'X':
                    X_check = True
                    break
            if not X_check: 
                board[i][j] = 'X'
                cnt += 1
                break
            else: continue
        else: break

print(cnt) 