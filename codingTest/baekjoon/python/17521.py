import sys; input = sys.stdin.readline

price_list = []
my_coin = 0
N, W = map(int, input().split())
for _ in range(N): price_list.append(int(input()))

for i in range(N-1):
    if not my_coin and (price_list[i] <= price_list[i+1]):
        my_coin = W // price_list[i]
        W %= price_list[i]
    elif my_coin and (price_list[i] > price_list[i+1]):
        W += my_coin * price_list[i]
        my_coin = 0

if my_coin: W += price_list[-1] * my_coin
print(W)