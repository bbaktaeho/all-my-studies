from collections import deque


def bfs():
    q = deque([n])
    while q:
        curNode = q.popleft()
        if curNode == k:
            return second[curNode]
        for nextNode in (curNode - 1, curNode + 1, curNode * 2):
            if 0 <= nextNode < 100001 and not second[nextNode]:
                q.append(nextNode)
                second[nextNode] = second[curNode] + 1


n, k = map(int, input().split())
second = [0 for _ in range(100001)]
print(bfs())
