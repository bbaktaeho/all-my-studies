def solution(phone_book):
    phone_book.sort(key=len)
    size = len(phone_book)
    for prefixI in range(size-1):
        for phoneI in range(prefixI+1, size):
            if phone_book[prefixI] == phone_book[phoneI][:len(phone_book[prefixI])]:
                return False
    return True

# 해시로 풀이
def solution(phone_book):
    hash_map = {}
    for phone in phone_book:
        hash_map[phone] = 1
    for phone in phone_book:
        temp = ""
        for number in phone:
            temp += number
            if temp in hash_map and temp != phone:
                return False
    return True