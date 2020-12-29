# 탐욕 알고리즘
# 최적의 해에 가까운 값을 구하기 위해 사용됨
# 매순간 최적이라고 생각되는 경우를 선택하는 방식
# ! 탐욕 알고리즘의 한계
# * 반드시 최적의 해를 구할 수 있는 것은 아님

# 동전문제
# 지불해야 하는 값이 4720원 일 때 10원 50원 100원 500원의 동전으로 동전의 수가 가장 적게 지불하시오
coinList = [500, 100, 50, 10]


def minCoin(value, coins=[]):
    total = 0
    details = []
    coins.sort(reverse=True)
    for coin in coins:
        count = value // coin
        total += count
        value -= count * coin
        details.append([coin, count])
    return total, details


print(minCoin(4720, coinList))


# 부분 배낭 몬제
# 무게 제한이 k인 배낭에 최대 가치를 가지도록 물건을 넣는 문제 (무게, 가치)
# 물건을 나눠서 최대한으로 넣을 수 있음
mList = [(15, 12), (10, 10), (30, 5), (20, 10), (25, 8)]


def getMaxValue(mList, capacity):
    mSortList = sorted(mList, key=lambda x: x[1] / x[0], reverse=True)
    totalValue = 0
    details = []

    for item in mSortList:
        if capacity - item[0] >= 0:
            capacity -= item[0]
            totalValue += item[1]
            details.append([item[0], item[1], 1])  # 리스트 마지막에 들어가는 수는 최대 1, 최소 0 (그 물건이 모두 들어갔으면 1)
        else:  # 배낭의 용량이 남아있을 때 남은 물건의 무게를 나눠서 들어갈 수 있을만큼 넣고 가치도 그만큼 추가해줌
            fraction = capacity / item[0]
            totalValue += item[1] * fraction
            details.append([item[0], item[1], fraction])
            break
    return totalValue, details


print(getMaxValue(mList, 30))