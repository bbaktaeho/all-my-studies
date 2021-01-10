class HashTable {
  #list = null;
  #size = 0;
  constructor(size) {
    this.#size = size;
    this.#list = new Array(size).fill(null);
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
    this.#list[address] = value;
  }

  getValue(data) {
    const key = this.getKey(data);
    return this.#list[this.hashFunc(key)];
  }
}

const hashTable = new HashTable(8);
hashTable.saveData('임태호', '문일고등학교');
hashTable.saveData('김민수', '금천고등학교');
hashTable.saveData('홍길동', '서울고등학교');
hashTable.saveData('신짱구', '인천고등학교');
hashTable.saveData('박지성', '부산고등학교');
hashTable.print();
console.log(hashTable.getItemCount());
console.log(hashTable.getValue('김민수'));
