for _ in range(int(input())):
    stu_list = list(map(int, input().split()))
    avg_score = sum(stu_list[1:]) / stu_list[0]
    cnt = 0
    for score in stu_list[1:]:
        if score > avg_score: cnt += 1
    print("%.3f" % (cnt / stu_list[0] * 100) + "%")
