p, n, h = map(int, input().split())
user_list = []
for _ in range(n):
    x, y = map(int, input().split()) # 피시 번호, 희망 시간
    if h < y: continue
    user_list.append([x, y])
total_prices = [0] * p
for user in user_list:
    total_prices[user[0]-1] += user[1]
    
for i, v in enumerate(total_prices):
    print(i+1, v * 1000)
