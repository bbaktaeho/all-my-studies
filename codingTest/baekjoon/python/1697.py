# from collections import deque


# def bfs():
#     q = deque([n])
#     while q:
#         curNode = q.popleft()
#         if curNode == k:
#             return second[curNode]
#         for nextNode in (curNode - 1, curNode + 1, curNode * 2):
#             if 0 <= nextNode < 100001 and not second[nextNode]:
#                 q.append(nextNode)
#                 second[nextNode] = second[curNode] + 1


# n, k = map(int, input().split())
# second = [0 for _ in range(100001)]
# print(bfs())


from collections import deque
N, K = map(int, input().split())

sec_list = [0] * 100001

def bfs():
    q = deque([N])
    while q:
        cur = q.popleft()
        if cur == K: return sec_list[cur] # 초 리턴
        for move in (cur-1, cur+1, cur*2): 
            if 0 <= move < 100001 and sec_list[move] == 0:
                q.append(move)
                sec_list[move] = sec_list[cur] + 1

print(bfs())