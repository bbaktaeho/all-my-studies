def solution(cloths):
    hash_map = {}
    count = 1
    for item in cloths:
        if item[1] in hash_map: hash_map[item[1]] += 1
        else: hash_map[item[1]] = 1
    for item in hash_map: # 선택받지 못하는 경우 (+1)
        hash_map[item] += 1
    for value in hash_map.values():
        count *= value
    return count - 1