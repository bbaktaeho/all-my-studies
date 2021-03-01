from collections import deque

def solution(bridge, weight, trucks):
    trucks = deque(trucks)
    complete = 0
    trucksLen = len(trucks)
    onBridge = deque([])
    sec = 0
    while complete != trucksLen:
        sec += 1
        if sec > bridge:
            if onBridge[0] != 0: complete += 1
            weight += onBridge.popleft()
        if len(trucks) != 0 and weight >= trucks[0]:
            weight -= trucks[0]
            onBridge.append(trucks.popleft())
        else: onBridge.append(0)
    return sec