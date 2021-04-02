from collections import deque
N, K = map(int, input().split())
sec_list = [0] * 100001
visited = [False] * 100001

def bfs():
    q = deque([N])
    while q:
        cur = q.popleft()
        if cur == K: 
            return sec_list[cur]
        for move in (cur-1, cur+1, cur*2):
            if 0 <= move < 100001 and not sec_list[move]:
                q.append(move)
                sec_list[move] = sec_list[cur] + 1