import sys
input = sys.stdin.readline

minFinish = 100001
maxStart = 0
for _ in range(int(input())):
    start, finish = map(int, input().split()) # 등교, 하교
    # 가장 느린 하교시간과 가장 느린 등교시간의 차를 구해야함
    minFinish = min(minFinish, finish)
    maxStart = max(maxStart, start)
print(maxStart - minFinish if maxStart > minFinish else 0)