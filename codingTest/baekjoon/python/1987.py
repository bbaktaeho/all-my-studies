import sys
sys.setrecursionlimit(10**6)

def dfs(x, y, next):
    global cnt
    if x < 0 or x >= R or y < 0 or y >= C:
        return
    if visited[x][y] or (graph[x][y] in visited_alpha):
        return
    visited[x][y] = True
    visited_alpha.add(graph[x][y])
    cnt+=1
    if next == 1:
        dfs(x-1, y, 1)
        dfs(x+1, y, 1)
        dfs(x, y-1, 1)
        dfs(x, y+1, 1)
    elif next == 2:
        dfs(x, y+1, 2)
        dfs(x-1, y, 2)
        dfs(x+1, y, 2)
        dfs(x, y-1, 2)
    elif next == 3:
        dfs(x, y-1, 3)
        dfs(x, y+1, 3)
        dfs(x-1, y, 3)
        dfs(x+1, y, 3)
    elif next == 4:
        dfs(x+1, y, 4)
        dfs(x, y-1, 4)
        dfs(x, y+1, 4)
        dfs(x-1, y, 4)

R, C = map(int, input().split())
graph = []
for _ in range(R):
    graph.append(list(input()))

visited = [[False] * C for _ in range(R)]
visited_alpha = set()

cnt_arr = []
cnt = 0
dfs(0, 0, 1)
cnt_arr.append(cnt)

cnt = 0
visited = [[False] * C for _ in range(R)]
visited_alpha = set()
dfs(0, 0, 2)
cnt_arr.append(cnt)

cnt = 0
visited = [[False] * C for _ in range(R)]
visited_alpha = set()
dfs(0, 0, 3)
cnt_arr.append(cnt)

cnt = 0
visited = [[False] * C for _ in range(R)]
visited_alpha = set()
dfs(0, 0, 4)
cnt_arr.append(cnt)
print(max(cnt_arr))

# 반례
# Input 2
# 20 20
# YBCDEFGHUJZAQFOJRQXH
# HAXNLTWMSKIVAPNOJZQD
# PMCOSPIJQPREGQZPFLRU
# VDGIWVDFHUAHFKUJHAOX
# TQKLUZPLRQOQUVIDJOZI
# ZFRJRTTHUGTJNIXKGUBC
# UHPASLMQZAMRIKQJOEZA
# MTZHFKJGJKQJKZWOAZAA
# VUTGSVFQRITNFSBCEAAB
# MWDQFTAKDFMGIOCEAABC
# SQVFEQXRBAUPRMEAABCD
# FGWUVWKIAENSCEAABCDE
# KVSXEZXDENBHAAABCDEF
# SEEJSKPENBPAAABCDEFG
# NFUAWDUCHPFAABCDEFGH
# SMLFVTRMHGAABCDEFGHI
# HNINXFMFEAABCDEFGHIJ
# FMJQJOGEAABCDEFGHIJK
# QFOFOFEAABCDEFGHIJKL
# AHFOAAAABCDEFGHIJKLM

# Output 2
# 26