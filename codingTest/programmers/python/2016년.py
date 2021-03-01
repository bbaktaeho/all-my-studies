from datetime import date
def solution(a, b):
    return date(2016, a, b).ctime()[:3].upper()