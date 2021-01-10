class HashTable(object):
    def __init__(self, size):
        self.size = size
        self.hashList = [None for _ in range(size)]

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
        self.hashList[address] = value

    def getValue(self, data):
        key = self.getKey(data)
        return self.hashList[self.hashFunc(key)]


hashTable = HashTable(8)
hashTable.saveData("임태호", "문일고등학교")
hashTable.saveData("김민수", "금천고등학교")
hashTable.saveData("홍길동", "서울고등학교")
hashTable.saveData("신짱구", "인천고등학교")
hashTable.saveData("박지성", "부산고등학교")
hashTable.printList()
print(hashTable.getValue("임태호"))