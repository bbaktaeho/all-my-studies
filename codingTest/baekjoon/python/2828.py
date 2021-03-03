N, M = map(int, input().split())

start = 1 # 바구니의 시작점 (바구니의 왼쪽)
end = start + M - 1 # 바구니의 마지막점 (바구니의 오른쪽)
count = 0 # 바구니를 이동한 횟수

for _ in range(int(input())):
    apple = int(input()) # 떨어지는 사과의 위치
    while not (start <= apple <= end):
        if end < apple:
            count += 1
            start += 1
        else:
            count += 1
            start -= 1
        end = start + M - 1
print(count)