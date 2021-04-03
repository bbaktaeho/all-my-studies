rank = dict() # 로또 등수 딕셔너리
for i in range(6, 0, -1): rank[i] = 7-i # 등수 초기화
rank[0] = 6 # 0개일 때 6등

def solution(lottos, win_nums):
    cnt = 0 # 최저 일치 카운트
    max_cnt = 0 # 최대 일치 카운트
    for num in lottos: # 0을 제외한 수가 일치하는지
        if num in win_nums: 
            cnt += 1
            win_nums.pop(win_nums.index(num))

    max_cnt = cnt
    for num in lottos: # 0일 때
        if len(win_nums) == 0: break
        if num == 0: 
            max_cnt += 1
            win_nums.pop()


    if max_cnt > 6: max_cnt = 6 # 최대 카운트를 넘겼을 때 예외 처리
    return [rank[max_cnt], rank[cnt]]

print(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]))