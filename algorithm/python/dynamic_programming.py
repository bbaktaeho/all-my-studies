# 상향식 접근법으로 가장 최하위 해답을 구한 후, 이를 저장하고, 해당 결과값을 이용해서 상위 문제를 풀어가는 방식
# memoization 기법을 사용 
# ex) 피보나치 수열

def fibonacci(n):
    if n == 1 or n == 0: return n
    else: return fibonacci(n-1) + fibonacci(n-2)

def fibo_dp(n):
    cache = [0 for i in range(n + 1)]
    cache[1] = 1
    
    for i in range(2, n+1): cache[i] = cache[i-2] + cache[i-1]
    return cache
print(fibo_dp(10))