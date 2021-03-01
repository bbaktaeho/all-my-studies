import re
def solution(ID):
    ID = ID.lower()
    ID = re.sub('[^0-9a-z\-\.\_]', '', ID) 
    ID = re.sub("[\.]{2,}", ".", ID) 
    if not len(ID):
        ID += 'a'
    if ID[0] == '.':
        ID = ID[1:]
    if not len(ID):
        ID += 'a'
    if ID[len(ID)-1] == '.':
        ID = ID[:len(ID)-1]
    if not len(ID):
        ID += 'a'
    if len(ID) >= 16:
        ID = ID[:15]
        if ID[len(ID)-1] == '.':
            ID = ID[:len(ID)-1]
    if len(ID) <= 2:
        last = len(ID)-1
        if len(ID) == 1:
           ID = ID[last] * 3
        else:
            ID += ID[last]
    return ID

solution("=.=")