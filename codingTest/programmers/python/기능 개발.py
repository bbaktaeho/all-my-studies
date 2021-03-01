from collections import deque

def solution(progresses, speeds):
    progresses = deque(progresses)
    speeds = deque(speeds)
    result = []
    while progresses:
        while progresses[0] < 100: 
            for i in range(len(speeds)): progresses[i] += speeds[i]
        cnt = 0
        while progresses and progresses[0] >= 100:
            cnt += 1
            progresses.popleft()
            speeds.popleft()
        result.append(cnt)
    return result
