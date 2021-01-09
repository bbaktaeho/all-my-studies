class Node(object):
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList(object):
    def __init__(self):
        self.head = None
        self.size = 0

    def printList(self):
        arr = []
        current = Node
        if self.head != None:
            current = self.head
            while current:
                arr.append(current.data)
                current = current.next
        print(arr)

    def add(self, node):
        self.size += 1
        if self.head == None:
            self.head = node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = node

    def insertBackAtData(self, node, data):
        if self.head == None:
            return
        current = self.head
        while current:
            if current.data == data:
                self.size += 1
                node.next = current.next
                current.next = node
                return
            current = current.next

    def searchData(self, data):
        if self.size != 0:
            current = self.head
            while current:
                if current.data == data:
                    return current
                current = current.next
            return None
        return None

    def removeData(self, data):
        if self.size != 0:
            node = self.head
            if node.data == data:
                self.head = node.next
                self.size -= 1
                return
            while node.next:
                if node.next.data == data:
                    node.next = node.next.next
                    self.size -= 1
                    return
                node = node.next


l = LinkedList()
for i in range(1, 20):
    l.add(Node(i))
l.insertBackAtData(Node(55), 10)
l.insertBackAtData(Node(525), 15)
l.insertBackAtData(Node(88), 7)
l.insertBackAtData(Node(555), 8)
l.printList()
print("size:", l.size)
print("search 55:", l.searchData(55))
l.removeData(88)
l.printList()
print("size:", l.size)
