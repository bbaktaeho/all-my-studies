# from collections import deque
# N = int(input())
# input_q = deque(map(int, input().split()))

# NGE_list = []

# while input_q:
#     max_num = sorted(input_q, reverse=True)[0]
#     current_num = input_q.popleft()
#     if max_num != current_num: 
#         for NGE in input_q:
#             if current_num < NGE: 
#                 NGE_list.append(NGE)
#                 break
#     else: NGE_list.append(-1)
# print(" ".join(map(str, NGE_list)))

# 시간 초과 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ




# 해결 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
N = int(input())
intput_data = list(map(int, input().split()))
st_num = [] # 오큰수를 아직 찾지 못한 수
st_index = [] # 오큰수를 아직 찾지 못한 수의 인덱스
result = [-1] * N # 오큰수를 저장할 리스트

for i in range(N):
    while len(st_num) > 0 and st_num[-1] < intput_data[i]:
        result[st_index.pop()] = intput_data[i]
        st_num.pop()
    st_num.append(intput_data[i])
    st_index.append(i)

print(" ".join(map(str, result)))