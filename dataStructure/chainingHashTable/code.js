class ChainingHashTable {
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
    return this.#list.filter(e => e).flat().length;
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
    if (!this.#list[address]) this.#list[address] = [[key, value]];
    else {
      for (const item of this.#list[address])
        if (item[0] == key) {
          item[1] = value;
          return;
        }
      this.#list[address].push([key, value]);
    }
  }

  getValue(data) {
    const key = this.getKey(data);
    const address = this.hashFunc(key);
    if (!this.#list[address]) return null;
    for (const item of this.#list[address]) if (item[0] == key) return item[1];
    return null;
  }
}

const chainingHashTable = new ChainingHashTable(8);
chainingHashTable.saveData('임태호', '문일고등학교');
chainingHashTable.saveData('김민수', '금천고등학교');
chainingHashTable.saveData('홍길동', '서울고등학교');
chainingHashTable.saveData('신짱구', '인천고등학교');
chainingHashTable.saveData('박지성', '부산고등학교');
chainingHashTable.print();
console.log(chainingHashTable.getItemCount());
console.log(chainingHashTable.getValue('김민수'));
