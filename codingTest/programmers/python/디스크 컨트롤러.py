import heapq
from collections import deque
def solution(jobs):
    job_count = len(jobs)
    jobs = deque(sorted(jobs))

    priority = [] # 요청부터 종료까지의 평균을 줄이기 위한 힙 자료구조
    current_time, running_time, completed = 0, 0, 0
    while completed < job_count:
        if not priority:
            req, time = jobs.popleft()
            current_time = req + time # 앞에 작업 중인 작업이 없으면 현재 시간은 요청 시간과 작업 시간을 더한 것임
            running_time += time # 요청 부터 종료까지 기다린 적이 없으므로 job의 작업 시간을 러닝 타임에 추가
        else: 
            time, req = heapq.heappop(priority)
            current_time += time
            running_time += current_time - req
        completed += 1
        # 다음으로 오는 작업들의 요청 시간이 현재 시간보다 작거나 같다면 힙에 저장
        while jobs and jobs[0][0] <= current_time:
            # 요청 시간은 이제 무의미하므로 작업 시간을 기준으로 힙에 push
            heapq.heappush(priority, jobs.popleft()[::-1])
    return running_time // job_count