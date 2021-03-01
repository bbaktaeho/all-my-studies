skill_tree = dict() # 각 스킬의 연계 스킬 저장소
link_skill_check = dict() # 연계 스킬로 사용 가능한지 확인하는 저장소
for s in input().split(): # 스킬트리 초기화
    skill_tree[s] = []
    link_skill_check[s] = False
for _ in (range(int(input()))):
    x, y = input().split()
    if x in skill_tree:
        skill_tree[x].append(y)

for skill in skill_tree.items():
    first_skill = skill[0]
    if link_skill_check[first_skill]: continue
    for i in skill[1]:
        if len(skill_tree[i]) > 0:
            for j in skill_tree[i]:
                print(first_skill, i, j)
        else:
            print(first_skill, i)
        link_skill_check[i] = True