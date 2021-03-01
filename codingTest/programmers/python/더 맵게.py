import heapq

def solution(scoville, K):
    heapq.heapify(scoville)
    cnt = 0
    while scoville[0] < K:
        cnt += 1
        if len(scoville) >= 2:
            firstMin, secondMin = heapq.heappop(scoville), heapq.heappop(scoville)
            heapq.heappush(scoville, firstMin + secondMin * 2)
        else: return -1
    return cnt