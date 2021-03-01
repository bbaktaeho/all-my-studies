def solution(prices):
    result = []
    for i in range(len(prices)):
        sec = 0
        for j in range(i+1, len(prices)):
            sec += 1
            if prices[i] > prices[j]: break
        result.append(sec)
    return result