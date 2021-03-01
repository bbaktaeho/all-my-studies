def solution(prices):
    result = [] # 가격이 떨어지지 않는 기간을 담은 리스트
    for i in range(len(prices)):
        sec = 0 # 가격이 떨어지는 않은 시점
        for j in range(i+1, len(prices)):
            sec += 1
            if prices[i] > prices[j]: break
        result.append(sec)
    return result