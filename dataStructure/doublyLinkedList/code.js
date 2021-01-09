class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  #size = 0;
  #head = null;
  #tail = null;

  getSize() {
    return this.#size;
  }

  printFromHead() {
    const list = [];
    let current = this.#head;
    while (current) {
      list.push(current.data);
      current = current.next;
    }
    console.log(list.toString());
  }

  printFromTail() {
    const list = [];
    let current = this.#tail;
    while (current) {
      list.push(current.data);
      current = current.prev;
    }
    console.log(list.toString());
  }

  add(node) {
    this.#size++;
    if (!this.#head) {
      this.#head = node;
      this.#tail = node;
    } else {
      let current = this.#head;
      while (current.next) current = current.next;
      current.next = node;
      node.prev = current;
      this.#tail = node;
    }
  }

  insertFrontAtData(node, data) {
    let current = this.#tail;
    while (current) {
      if (current.data == data) {
        this.#size++;
        node.next = current;
        node.prev = current.prev;
        current.prev.next = node;
        current.prev = node;
        return;
      } else current = current.prev;
    }
  }

  insertBackAtData(node, data) {
    let current = this.#head;
    while (current) {
      if (current.data == data) {
        this.#size++;
        node.prev = current;
        node.next = current.next;
        current.next.prev = node;
        current.next = node;
        return;
      } else current = current.next;
    }
  }

  removeDataFromHead(data) {
    let current = this.#head;
    if (current?.data == data) {
      this.#size--;
      this.#head = current.next;
      current.prev = null;
    } else {
      while (current) {
        if (current.data == data) {
          this.#size--;
          current.prev.next = current.next;
          current.next.prev = current.prev;
          return;
        } else current = current.next;
      }
    }
  }

  searchFromHead(data) {
    let current = this.#head;
    while (current) {
      if (current.data == data) return current;
      else current = current.next;
    }
    return null;
  }

  searchFromTail(data) {
    let current = this.#tail;
    while (current) {
      if (current.data == data) return current;
      else current = current.prev;
    }
    return null;
  }
}
