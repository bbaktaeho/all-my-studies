import math
import sys
input = sys.stdin.readline
N = int(input())
M = int(input())
x_arr = list(map(int, input().split()))

gap = []
if len(x_arr) > 1:
    for i in range(M-1): gap.append(x_arr[i+1] - x_arr[i])
    max_gap = math.ceil(max(gap) / 2) # 가로등 사이의 최대 차이를 이용하여 최소 높이를 찾음
    print(max(max_gap, x_arr[0], N - x_arr[-1]))
else:
    print(max(x_arr[0], N - x_arr[-1]))
