class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev; // new property to store previous node
  }
}

class LinkedList {
  constructor(initialValue) {
    this.head = new Node(initialValue);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = new Node(value, null, this.tail); // add tail as previous node
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this;
  }

  prepend(value) {
    const node = new Node(value, this.head);
    this.head.prev = node; // add to current head the new node as prev
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
      const node = new Node(value, prev.next, prev); // add previous node as prev in new node
      prev.next.prev = node; // for the next node of prev, assign the new node as prev
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
      toRemove.next.prev = prev; // for the next node of the one to remove, assign the previous node as prev
      toRemove.next = null;
    }
    this.length--;
  }

  print() {
    let elem = this.head;
    let index = 0;
    while (elem) {
      console.log(`index: ${index} -`, elem);
      elem = elem.next;
      index++;
    }
    console.log(this.length);
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
list.append(5);
list.prepend(55).prepend(88);
// list.insert(1, 22);
list.remove(1);
list.print();
