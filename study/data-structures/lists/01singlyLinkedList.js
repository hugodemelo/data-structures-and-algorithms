class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(initialValue) {
    this.head = new Node(initialValue);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  prepend(value) {
    const node = new Node(value, this.head);
    this.head = node;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
    } else if (index >= this.length) {
      this.append(value);
    } else {
      const prev = this.#getNodeAt(index - 1);
      const node = new Node(value, prev.next);
      prev.next = node;
      this.length++;
    }
    return this;
  }

  remove(index) {
    if (index === 0) {
      const toDelete = this.head;
      this.head = this.head.next;
      toDelete.next = null;
    } else {
      const prev = this.#getNodeAt(Math.min(index, this.length - 1) - 1);
      const toRemove = prev.next;
      if (toRemove.next === null) {
        // if this is the last element, update the tail
        this.tail = prev;
      }
      prev.next = toRemove.next;
      toRemove.next = null;
    }
    this.length--;
  }

  reverse() {
    this.tail = this.head;

    let first = this.head;
    let middle = first.next;
    while (middle) {
      let last = middle.next;
      middle.next = first;
      first = middle;
      middle = last;
    }
    this.tail.next = null;
    this.head = first;
  }

  print() {
    let elem = this.head;
    let index = 0;
    while (elem) {
      console.log(`index: ${index} -`, elem);
      elem = elem.next;
      index++;
    }
    console.log('length: ', this.length);
    console.log('head: ', this.head);
    console.log('tail: ', this.tail);
  }

  #getNodeAt(index) {
    let current = 0;
    let node = this.head;
    while (current !== index) {
      node = node.next;
      current++;
    }
    return node;
  }
}

const list = new LinkedList(11);
list.append(55).append(66);
// list.prepend(55).prepend(88).prepend(66);
// list.remove(4);
// list.print();
// list.append(23);
// list.insert(1, 22);
list.reverse();
list.print();
