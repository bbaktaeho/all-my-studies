from collections import deque

N, K = map(int, input().split())
num_list = deque([i for i in range(1, N+1)])
turn = 1
result = []
while num_list:
    if turn == K: 
        result.append(num_list.popleft())
        turn = 1
    else:
        num_list.append(num_list.popleft())
        turn += 1
print("<" + ", ".join(map(str, result)) + ">")