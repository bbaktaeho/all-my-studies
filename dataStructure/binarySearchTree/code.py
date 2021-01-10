class Node(object):
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


class BinarySearchTree(object):
    def __init__(self):
        self.head = None

    def getHead(self):
        return self.head

    def insert(self, node):
        if self.head == None:
            self.head = node
        else:
            current = self.head
            while True:
                if current.value > node.value:
                    if current.left == None:
                        current.left = node
                        break
                    else:
                        current = current.left
                else:
                    if current.right == None:
                        current.right = node
                        break
                    else:
                        current = current.right

    def search(self, value):
        current = self.head
        while current:
            if current.value == value:
                return True, current
            elif current.value > value:
                current = current.left
            else:
                current = current.right
        return False, None

    # def __removeValue():

    def remove(self, value):
        searched = False
        parent = self.head
        current = self.head
        while current:
            if current.value == value:
                searched = True
                break
            elif current.value > value:
                parent = current
                current = current.left
            else:
                parent = current
                current = current.right

        if searched == False:
            return False
        else:
            if current == self.head:
                d
            elif current.left == None and current.right == None:
                if parent.value > value:
                    parent.left = None
                else:
                    parent.right = None
            elif current.right == None:
                if parent.value > value:
                    parent.left = current.left
                else:
                    parent.right = current.left
            elif current.left == None:
                if parent.value > value:
                    parent.left = current.right
                else:
                    parent.right = current.right
            else:
                if parent.value > value:
                    changeParent = current.right
                    change = current.right
                    while change.left:
                        changeParent = change
                        change = change.left
                    if change.right != None:
                        changeParent.left = change.right
                    else:
                        changeParent.left = None
                    parent.left = change
                    change.right = current.right
                    change.left = current.left
                else:
                    changeParent = current.right
                    change = current.right
                    while change.left:
                        changeParent = change
                        change = change.left
                    if change.right != None:
                        changeParent.left = change.right
                    else:
                        changeParent.left = None
                    parent.right = change
                    change.right = current.right
                    change.left = current.left


bst = BinarySearchTree()
bst.insert(Node(10))
bst.insert(Node(15))
bst.insert(Node(5))
bst.insert(Node(20))
bst.insert(Node(13))
bst.insert(Node(1))
bst.insert(Node(6))
bool, node = bst.search(10)
if node:
    print(node.value, ": left ->", node.left.value if node.left != None else None)
    print(node.value, ": right ->", node.right.value if node.right != None else None)
bool, node = bst.search(15)
if node:
    print(node.value, ": left ->", node.left.value if node.left != None else None)
    print(node.value, ": right ->", node.right.value if node.right != None else None)
bool, node = bst.search(5)
if node:
    print(node.value, ": left ->", node.left.value if node.left != None else None)
    print(node.value, ": right ->", node.right.value if node.right != None else None)
