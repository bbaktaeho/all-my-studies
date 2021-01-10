class LinearProbingHashTable(object):
    def __init__(self, size):
        self.hashList = [None for _ in range(size)]
        self.size = size

    def printList(self):
        print(self.hashList)

    def getItemCount(self):
        return len(list(filter(lambda x: x != None, self.hashList)))

    def getKey(self, data):
        return hash(data)

    def hashFunc(self, key):
        return key % self.size

    def saveData(self, data, value):
        key = self.getKey(data)
        address = self.hashFunc(key)
        if self.hashList[address] != None:
            for i in range(address, self.size):
                if self.hashList[i] == None:
                    self.hashList[i] = [key, value]
                    return
                elif self.hashList[i][0] == key:
                    self.hashList[i][1] = value
                    return
        else:
            self.hashList[address] = [key, value]

    def getValue(self, data):
        key = self.getKey(data)
        address = self.hashFunc(key)
        if self.hashList[address] != None:
            for i in range(address, self.size):
                if self.hashList[i] == None:
                    return None
                elif self.hashList[i][0] == key:
                    return self.hashList[i][1]


hashTable = LinearProbingHashTable(8)
hashTable.saveData("임태호", "문일고등학교")
hashTable.saveData("김민수", "금천고등학교")
hashTable.saveData("홍길동", "서울고등학교")
hashTable.saveData("신짱구", "인천고등학교")
hashTable.saveData("박지성", "부산고등학교")
hashTable.printList()
print(hashTable.getValue("임태호"))
print(hashTable.getValue("김민수"))
print(hashTable.getValue("홍길동"))
print(hashTable.getValue("신짱구"))
print(hashTable.getValue("박지성"))
print(hashTable.getItemCount())