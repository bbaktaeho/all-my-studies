class MaxHeap {
  #heap = [];
  constructor() {
    this.#heap.push(null);
  }
  #getLeftIdx = parentIdx => parentIdx * 2;
  #getRightIdx = parentIdx => parentIdx * 2 + 1;
  #getParentIdx = childIdx => (childIdx == 0 ? -1 : Math.floor(childIdx / 2));
  #swap = (i, j) => {
    [this.#heap[i], this.#heap[j]] = [this.#heap[j], this.#heap[i]];
  };
  #heapify = startIdx => {
    let leftIdx = this.#getLeftIdx(startIdx);
    let rightIdx = this.#getRightIdx(startIdx);
    if (leftIdx >= this.getSize()) return;
    if (rightIdx >= this.getSize()) {
      if (this.#heap[startIdx] < this.#heap[leftIdx]) {
        this.#swap(startIdx, leftIdx);
        this.#heapify(leftIdx);
      }
    } else if (this.#heap[leftIdx] < this.#heap[rightIdx]) {
      if (this.#heap[startIdx] < this.#heap[rightIdx]) {
        this.#swap(startIdx, rightIdx);
        this.#heapify(rightIdx);
      }
    } else {
      if (this.#heap[startIdx] < this.#heap[leftIdx]) {
        this.#swap(startIdx, leftIdx);
        this.#heapify(leftIdx);
      }
    }
  };

  getSize = () => this.#heap.length;
  getHeap = () => this.#heap.slice(1);
  isEmpty = () => (this.getSize() == 1 ? true : false);
  insert = data => {
    this.#heap.push(data);
    if (this.getSize() == 2) return;
    let changeIdx = this.getSize() - 1;
    let parentIdx = this.#getParentIdx(changeIdx);
    while (parentIdx >= 1 && this.#heap[parentIdx] < this.#heap[changeIdx]) {
      this.#swap(parentIdx, changeIdx);
      changeIdx = parentIdx;
      parentIdx = this.#getParentIdx(changeIdx);
    }
  };
  pop() {
    if (this.isEmpty()) return null;
    this.#swap(1, this.getSize() - 1);
    const result = this.#heap.pop();
    this.#heapify(1);
    return result;
  }
}
