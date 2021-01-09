class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  #size = 0;
  #head = null;

  getSize() {
    return this.#size;
  }
  print() {
    const list = [];
    if (!this.#head) console.log(list.toString());
    else {
      let node = this.#head;
      while (node) {
        list.push(node.data);
        node = node.next;
      }
      console.log(list.toString());
    }
  }

  add(node) {
    this.#size++;
    if (!this.#head) this.#head = node;
    else {
      let current = this.#head;
      while (current.next) current = current.next;
      current.next = node;
    }
  }

  insertBackAtData(node, data) {
    if (!this.#head) return;
    let current = this.#head;
    while (current) {
      if (current.data == data) {
        this.#size++;
        const curNext = current.next;
        current.next = node;
        node.next = curNext;
        return;
      } else current = current.next;
    }
  }

  removeAtData(data) {
    if (!this.#head) return;
    let current = this.#head;
    if (current.data == data) {
      this.#size--;
      this.#head = current.next;
      return;
    }
    while (current.next) {
      if (current.next.data == data) {
        this.#size--;
        current.next = current.next.next;
        return;
      } else current = current.next;
    }
  }

  searchData(data) {
    if (!this.#head) return null;
    if (this.#head.data == data) return this.#head;
    let current = this.#head.next;
    while (current) {
      if (current.data == data) return current;
      else current = current.next;
    }
    return null;
  }
}

const linkedList = new LinkedList();
for (let i = 1; i < 11; i++) linkedList.add(new Node(i));
linkedList.print();
linkedList.insertBackAtData(new Node(2.5), 2);
linkedList.print();
linkedList.removeAtData(7);
linkedList.print();
console.log(linkedList.getSize());
console.log(linkedList.searchData(3));
