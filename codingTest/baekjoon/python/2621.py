card_dict = dict()
card_num_list = []
for _ in range(5):
    card, num = input().split()
    num = int(num)
    card_num_list.append(num)
    try: card_dict[card].append(num)
    except: card_dict[card] = [num]

def score_role_1(card):
    for i in range(len(card_dict[card]))-1:
        if card_dict[card][i] + 1 != card_dict[card][i+1]: return 0
    return card_dict[card][4] + 900

def score_role_2():
    for num in card_num_list:
        if card_num_list.count(num) == 4: return num + 800
    return 0

def score_role_3():
    for num in card_num_list:
        if card_num_list.count(num) == 3: 
            for num2 in card_num_list:
                if num == num2: continue
                if card_num_list.count(num2) == 2: return num * 10 + num2 + 700
                else: return 0
    return 0

def score_role_4(card_dict):
    if len(card_dict) == 1: return max(*card_dict.values()) + 600

def score_role_5():
    for i in range(len(card_num_list)-1):
        if card_num_list[i] + 1 != card_num_list[i+1]: return 0
    return card_num_list[4] + 500

def score_role_6():
    for num in card_num_list:
            if card_num_list.count(num) == 3: 
                return num + 400
    return 0

def score_role_7():
    for num in card_num_list:
        if card_num_list.count(num) == 2: 
            for num2 in card_num_list:
                if num == num2: continue
                if card_num_list.count(num2) == 2: return max(num,num2) * 10 + min(num,num2) + 300
                else: return 0
    return 0

def score_role_8():
    for num in card_num_list:
        if card_num_list.count(num) == 2: return num + 200
    return 0

# 카드의 숫자 정렬
for card in card_dict: card_dict[card].sort()
# 숫자 정렬
card_num_list.sort()



        
