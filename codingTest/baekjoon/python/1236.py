import sys
input = sys.stdin.readline

N, M = map(int, input().strip().split())
board = []
for _ in range(N): board.append(list(input().strip()))
result = 0 # 최소로 추가하는 경비 수

def column_check(c):
    for r in range(N):
        if board[r][c] == 'X': return True
    return False

for i in range(N): # 로우 
    if board[i].count('X') == 0: # ....
        pre_result = result
        for j in range(M):
            if not column_check(j): 
                board[i][j] = 'X'
                result += 1
                break
        if pre_result == result: result += 1 # 아무곳에 경비를 둠

for i in range(M): # 컬럼
    if not column_check(i): result += 1

print(result)



import sys
input = sys.stdin.readline

N, M = map(int, input().split())
square = []
for _ in range(N): square.append(input().strip())

row = [0] * N
column = [0] * M

for i in range(N): # O(N2)
    for j in range(M):
        if square[i][j] == 'X': row[i], column[j] = 1, 1

print(max(row.count(0), column.count(0)))