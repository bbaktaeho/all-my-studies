import sys; input = sys.stdin.readline

for _ in range(int(input())):
    N, M = input().rstrip().split()
    # N_size, M_size = len(N), len(M)
    # if N_size > M_size: M = '0' * (N_size - M_size) + M
    # else: N = '0' * (M_size - N_size) + N
    result = 0
    need_one_list = []
    for i in range(len(N)):
        if N[i] != M[i]: 
            if N[i] == '0': # 숫자 0이 아닌 것을 조심
                need_one_list.append(True)
                result += 1
            elif need_one_list: need_one_list.pop()
            else: result += 1
    print(result)