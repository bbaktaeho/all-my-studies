import heapq
import sys
input = sys.stdin.readline

vote_list = []
N = int(input())
dasom = int(input())
for _ in range(1, N): 
    vote = int(input())
    heapq.heappush(vote_list, (-vote, vote))

result = 0
while True and vote_list:
    max_vote = heapq.heappop(vote_list)[1]
    if dasom > max_vote: break
    dasom += 1
    max_vote -= 1
    result += 1
    heapq.heappush(vote_list, (-max_vote, max_vote))
print(result)