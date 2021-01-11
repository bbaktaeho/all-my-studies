class MaxHeap(object):
    def __init__(self):
        self.__heapArray = []
        self.__heapArray.append(None)

    @property
    def heapArray(self):
        return self.__heapArray[1:]

    def __swap(self, idx1, idx2):
        self.__heapArray[idx1], self.__heapArray[idx2] = (
            self.__heapArray[idx2],
            self.__heapArray[idx1],
        )

    def __changeUp(self, insertIdx):
        if insertIdx == 1:
            return False
        parentIdx = insertIdx // 2
        if self.__heapArray[insertIdx] > self.__heapArray[parentIdx]:
            return True
        return False

    def __changeDown(self, topIdx, leftIdx, rightIdx, length):
        if leftIdx >= length:
            return False
        elif rightIdx >= length:
            if self.__heapArray[topIdx] < self.__heapArray[leftIdx]:
                return True
            else:
                return False
        else:
            if self.__heapArray[leftIdx] > self.__heapArray[rightIdx]:
                if self.__heapArray[topIdx] < self.__heapArray[leftIdx]:
                    return True
                else:
                    return False
            else:
                if self.__heapArray[topIdx] < self.__heapArray[rightIdx]:
                    return True
                else:
                    return False

    def insert(self, data):
        if len(self.__heapArray) == 0:
            self.__heapArray.append(data)
        else:
            self.__heapArray.append(data)
            insertIdx = len(self.__heapArray) - 1
            while self.__changeUp(insertIdx):
                parentIdx = insertIdx // 2
                self.__swap(insertIdx, parentIdx)
                insertIdx = parentIdx

    def pop(self):
        if len(self.__heapArray) <= 1:
            return None
        popData = self.__heapArray[1]
        self.__heapArray[1] = self.__heapArray[-1]
        del self.__heapArray[-1]

        length = len(self.__heapArray)
        topIdx = 1
        leftIdx = topIdx * 2
        rightIdx = topIdx * 2 + 1
        while self.__changeDown(topIdx, leftIdx, rightIdx, length):
            if rightIdx >= length:
                if self.__heapArray[topIdx] < self.__heapArray[leftIdx]:
                    self.__swap(topIdx, leftIdx)
                    topIdx = leftIdx
                    leftIdx, rightIdx = topIdx * 2, topIdx * 2 + 1
            else:
                if self.__heapArray[leftIdx] < self.__heapArray[rightIdx]:
                    if self.__heapArray[topIdx] < self.__heapArray[rightIdx]:
                        self.__swap(topIdx, rightIdx)
                        topIdx = rightIdx
                        leftIdx, rightIdx = topIdx * 2, topIdx * 2 + 1
                else:
                    if self.__heapArray[topIdx] < self.__heapArray[leftIdx]:
                        self.__swap(topIdx, leftIdx)
                        topIdx = leftIdx
                        leftIdx, rightIdx = topIdx * 2, topIdx * 2 + 1
        return popData


maxHeap = MaxHeap()
maxHeap.insert(15)
maxHeap.insert(10)
maxHeap.insert(8)
maxHeap.insert(5)
maxHeap.insert(4)
maxHeap.insert(20)
print(maxHeap.heapArray)
print(maxHeap.pop())
print(maxHeap.heapArray)
print(maxHeap.pop())
print(maxHeap.heapArray)
print(maxHeap.pop())
print(maxHeap.heapArray)
