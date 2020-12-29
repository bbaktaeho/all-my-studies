def binarySearch(data, search):
    if len(data) == 1:
        if search != data[0]: return False
        else: return True

    medium = len(data) // 2
    if search == data[medium]: return True
    else:
        if search > data[medium]: return binarySearch(data[medium:], search)
        else: binarySearch(data[:medium], search)