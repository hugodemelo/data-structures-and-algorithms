class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
  }

  dequeue() {
    if (!this.first) {
      return undefined;
    } else {
      const toRemove = this.first;
      if (this.length === 1) {
        this.last = null;
        this.first = null;
      } else {
        this.first = this.first.next;
      }
      this.length--;
      return toRemove;
    }
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue);

queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue);
