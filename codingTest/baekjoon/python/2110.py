# N, C = map(int, input().split())
# home_list = []
# for _ in range(N): home_list.append(int(input()))
# home_list = sorted(home_list)

# start = home_list[1] - home_list[0]
# end = home_list[-1] - home_list[0]
# result = set()

# while start <= end:
#     mid = (start + end) // 2 # 갭 찾기
#     value = home_list[0]
#     cnt = 1
#     for i in range(1, N):
#         if home_list[i] >= value + mid:
#             value = home_list[i]
#             cnt += 1
#     if cnt >= C:
#         start = mid + 1
#         result.add(mid)
#     else: end = mid - 1
# print(max(result))


N, C = map(int, input().split()) 
wifi = [int(input()) for _ in range(N)] 
wifi.sort() 
min_gap, max_gap = 1, wifi[-1] - wifi[0] 
result = 0 
while min_gap <= max_gap: 
    mid_gap = (min_gap + max_gap) // 2 
    count = 1 
    start = wifi[0] 
    for i in range(1, N): 
        if mid_gap <= wifi[i] - start: 
            count += 1 
            start = wifi[i] 
    if count >= C: 
        result = mid_gap 
        min_gap = mid_gap + 1
    else: max_gap = mid_gap - 1 
print(result)

