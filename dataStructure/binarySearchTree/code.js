class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchThree {
  #head = null;

  getHead() {
    return this.#head;
  }

  insert(node) {
    if (!this.#head) {
      this.#head = node;
      return;
    }
    let current = this.#head;
    while (true) {
      if (node.value < current.value) {
        if (!current.left) {
          current.left = node;
          break;
        } else current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          break;
        } else current = current.right;
      }
    }
  }

  searchAndGetNode(value) {
    let current = this.#head;
    while (current) {
      if (current.value == value) return current;
      else if (value < current.value) current = current.left;
      else current = current.right;
    }
    return null;
  }

  #removeValue(current, parent, change, chParent) {
    while (change.left) {
      chParent = change;
      change = change.left;
    }
    if (current.right === change) {
      parent.right = change;
      change.left = current.left;
      return true;
    }
    if (!change.right) chParent.left = change.right;
    else chParent.left = null;
    return false;
  }

  remove(value) {
    let current = this.#head;
    let parent = new Node(Infinity, this.#head, this.#head);
    let searched = false;
    while (current) {
      if (value == current.value) {
        searched = true;
        break;
      } else if (value < current.value) {
        parent = current;
        current = current.left;
      } else {
        parent = current;
        current = current.right;
      }
    }
    if (searched) {
      if (!current.left && !current.right) {
        if (value < parent.value) parent.left = null;
        else parent.right = null;
      } else if (!current.left) {
        if (value < parent.value) parent.left = current.right;
        else parent.right = current.right;
      } else if (!current.right) {
        if (value < parent.value) parent.left = current.left;
        else parent.right = current.left;
      } else {
        let change = current.right;
        let chParent = current.right;
        if (value < parent.value) {
          const flag = this.#removeValue(current, parent, change, chParent);
          if (!flag) {
            parent.left = change;
            change.right = current.right;
            change.left = current.left;
          }
        } else {
          const flag = this.#removeValue(current, parent, change, chParent);
          if (!flag) {
            parent.right = change;
            change.right = current.right;
            change.left = current.left;
          }
        }
      }
    }
  }
}

const bst = new BinarySearchThree();
bst.insert(new Node(10));
bst.insert(new Node(5));
bst.insert(new Node(15));
bst.insert(new Node(17));
bst.insert(new Node(13));
bst.insert(new Node(7));
bst.insert(new Node(3));
console.log(bst.getHead());
bst.remove(15);
console.log(bst.getHead());
bst.remove(10);
console.log(bst.searchAndGetNode(10));
console.log(bst.getHead());
