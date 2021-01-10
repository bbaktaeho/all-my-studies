class LinearProbingHashTable {
  #list = null;
  #size = 0;
  constructor(size) {
    this.#list = new Array(size).fill(null);
    this.#size = size;
  }

  print() {
    console.log(this.#list);
  }

  getItemCount() {
    return this.#list.filter(e => e).length;
  }

  getKey(data) {
    let hash = 0;
    for (const c of data) hash += c.charCodeAt();
    return hash;
  }

  hashFunc(key) {
    return key % this.#size;
  }

  saveData(data, value) {
    const key = this.getKey(data);
    const address = this.hashFunc(key);
    if (!this.#list[address]) this.#list[address] = [key, value];
    else
      for (let i = address; i < this.#size; i++) {
        if (!this.#list[i]) {
          this.#list[i] == [key, value];
          return;
        } else if (this.#list[i][0] == key) {
          this.#list[i][1] = value;
          return;
        }
      }
  }

  getValue(data) {
    const key = this.getKey(data);
    const address = this.hashFunc(key);
    if (!this.#list[address]) return null;
    else
      for (let i = address; i < this.#size; i++)
        if (this.#list[i][0] == key) return this.#list[i][1];
    return null;
  }
}

const linearProbingHashTable = new LinearProbingHashTable(8);
linearProbingHashTable.saveData('임태호', '문일고등학교');
linearProbingHashTable.saveData('김민수', '금천고등학교');
linearProbingHashTable.saveData('손흥민', '독일고등학교');
linearProbingHashTable.saveData('홍길동', '서울고등학교');
linearProbingHashTable.saveData('신짱구', '인천고등학교');
linearProbingHashTable.saveData('박지성', '부산고등학교');
linearProbingHashTable.print();
console.log(linearProbingHashTable.getItemCount());
console.log(linearProbingHashTable.getValue('김민수'));
console.log(linearProbingHashTable.getValue('손흥민'));
