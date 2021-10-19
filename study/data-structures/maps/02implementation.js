class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  set(key, value) {
    const newEntry = { key, value, next: null };
    const hash = this.#hash(key);
    const tmp = this.data[ hash ];
    if (tmp) {
      newEntry.next = tmp;
    }
    this.data[ hash ] = newEntry;
  }

  get(key) {
    const hash = this.#hash(key);
    let elem = this.data[ hash ];
    while (elem) {
      if (elem.key === key) {
        return elem;
      }
      elem = elem.next;
    }
    return undefined;
  }

  keys() {
    const keys = [];
    for (const head of this.data) {
      let elem = head;
      while (elem) {
        keys.push(elem.key);
        elem = elem.next;
      }
    }
    return keys;
  }

  #hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 1000);

// console.log(myHashTable.data);
console.log(myHashTable.get('grapes'));
console.log(myHashTable.get('apples'));

myHashTable.set('grapes', 1000);
myHashTable.set('apples', 1000);
myHashTable.set('oranges', 1000);
myHashTable.set('berries', 1000);
myHashTable.set('bananas', 1000);

console.log(myHashTable.keys());
