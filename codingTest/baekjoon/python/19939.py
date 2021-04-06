N, K = map(int, input().split())
N -= K # 모든 바구니에 1개씩 나눠줌
bracket_list = [1] * K

for i in range(1, K+1): 
    if N - i < 0: break
    bracket_list[i-1] += i
    N -= i
if len(set(bracket_list)) < len(bracket_list): print(-1) # 같은 개수의 공이 있는 경우
elif N == 0: print(max(bracket_list) - min(bracket_list)) # 공이 남아있지 않는 경우
else: # 모든 바구니에 다른 개수가 들어있는 경우
    while N > 0:
        for i in range(K):
            if N - K < 0: 
                for j in range(i, K):
                    if bracket_list.count((bracket_list[j] + N)) == 0:
                        bracket_list[j] += N
                        N = 0
                        break
                break
            bracket_list[i] += K
            N -= K
    print(max(bracket_list) - min(bracket_list))
