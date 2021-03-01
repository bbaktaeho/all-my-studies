def solution(n,lost,reserve):
    count = n - len(lost)
    lost.sort()
    reserve.sort()

    for l in range(len(lost)):
        for r in range(len(reserve)):
            if lost[l] == reserve[r]:
                lost[l] = -1
                reserve[r] = -1

    for item in lost:
        for r in range(len(reserve)):
            if reserve[r] == item - 1 or reserve[r] == item + 1:
                reserve[r] = -1
                break
    
    return count + len(list(filter(lambda x: x == -1, reserve)))