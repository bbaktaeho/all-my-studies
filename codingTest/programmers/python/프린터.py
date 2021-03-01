from collections import deque
def solution(priorities, location):
    printer = deque([])
    for i, v in enumerate(priorities): printer.append([i, v])
    
    cnt = 0
    popPrint = -1
    while location != popPrint:
        if printer[0][1] == max(printer, key=lambda x: x[1])[1]:
            cnt += 1
            popPrint = printer.popleft()[0]
        else: printer.append(printer.popleft())
    return cnt