def solution(d, budget):
    d.sort()
    count = 0
    for i in d:
        budget -= i
        if budget >= 0:
            count += 1
        else: break
    return count