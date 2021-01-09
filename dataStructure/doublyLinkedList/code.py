class Node(object):
    def __init__(self, data):
        self.data = data
        self.prev = None
        self.next = None


class DoublyLinkedList(object):
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0

    def printFromHead(self):
        arr = []
        node = self.head
        while node:
            arr.append(node.data)
            node = node.next
        print(arr)

    def printFromTail(self):
        arr = []
        node = self.tail
        while node:
            arr.append(node.data)
            node = node.prev
        print(arr)

    def add(self, node):
        self.size += 1
        if self.head == None:
            self.head = node
            self.tail = self.head
        else:
            current = self.head
            while current.next:
                current = current.next
            node.prev = current
            current.next = node
            self.tail = node

    def insertFrontAtData(self, node, data):
        current = self.tail
        while current:
            if current.data == data:
                self.size += 1
                node.next = current
                node.prev = current.prev
                current.prev.next = node
                current.prev = node
                return
            current = current.prev

    def insertBackAtData(self, node, data):
        current = self.head
        while current:
            if current.data == data:
                self.size += 1
                node.prev = current
                node.next = current.next
                current.next.prev = node
                current.next = node
                return
            current = current.next

    def removeDataFromTail(self, data):
        current = self.tail
        if not current:
            return
        if current.data == data:
            self.size -= 1
            self.tail = current.prev
            current.prev.next = None
        else:
            while current:
                if current.data == data:
                    self.size -= 1
                    current.prev.next = current.next
                    current.next.prev = current.prev
                    return
                else:
                    current = current.prev

    def searchFromTail(self, data):
        if self.tail == None:
            return None
        node = self.tail
        while node:
            if node.data == data:
                return node
            node = node.prev
        return None

    def searchFromHead(self, data):
        if self.head == None:
            return None
        node = self.head
        while node:
            if node.data == data:
                return node
            node = node.next
        return None


l = DoublyLinkedList()
for i in range(1, 11):
    l.add(Node(i))
