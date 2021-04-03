import math

rel = dict() # 다단계 사람들의 관계
seller_amount = dict() # 판매원들이 판매한 금액
price = 100 # 제품 판매 금액
result = dict() # 사람들의 실수령액

# 인간 관계를 매핑
def rel_mapping(super, sub): rel[sub] = super

# 판매원들이 판매한 금액을 계산
def seller_calc(user, amount):
    try: seller_amount[user] += amount * price
    except: seller_amount[user] = amount * price

# 실수령액 계산
def my_money(user, money):
    try: result[user] += money
    except: result[user] = money

def solution(enroll, referral, seller, amount):
    for i in range(len(enroll)):
        if referral[i] == '-': rel_mapping("center", enroll[i])
        else: rel_mapping(referral[i], enroll[i])

    for i in range(len(seller)): seller_calc(seller[i], amount[i])

    # 실수령액
    for user in enroll:
        if user in seller_amount:
            sal_money = seller_amount[user] # 해당 유저의 판매액
            other_money = sal_money * 0.1
            if other_money < 1: my_money(user, sal_money) # 10% 금액이 1원 미만일 경우
            else: # 10% 금액이 1원 이상일 경우
                my_money(user, math.ceil(sal_money * 0.9))
                my_money(rel[user], math.floor(other_money)) # 추천인에게 10%
                while True:
                    if rel[user] != "center":
                        user = rel[user] # 추천인을 추천해준 추천인
                        other_money = other_money * 0.1
                        if other_money >= 1: 
                            my_money(user, -math.floor(other_money)) # 자신의 돈에 10% 빼기 
                            my_money(rel[user], math.floor(other_money)) # 추천인의 추천인에게 10%
                        else: break
                    else: break
        else: my_money(user, 0)
    result.pop('center') # 다단계는 나빠요!
    return list(result.values())