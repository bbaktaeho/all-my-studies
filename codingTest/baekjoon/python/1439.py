S = input()
# 0들의 덩어리 수, 1들의 덩어리 수
num_count_list = [0, 0]

for i in range(len(S)-1):
    if S[i] != S[i+1]: num_count_list[int(S[i])] += 1

# 마지막 요소는 위 반복에서 카운팅을 못했으므로 하나 추가
num_count_list[int(S[-1])] += 1 

print(min(num_count_list))