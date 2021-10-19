class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.top = node;
      this.bottom = node;
    } else {
      const previousTop = this.top;
      this.top = node;
      this.top.next = previousTop;
    }
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    } else {
      const toRemove = this.top;
      if (this.length === 1) {
        this.top = null;
        this.bottom = null;
      } else {
        this.top = toRemove.next;
      }
      this.length--;
      return toRemove;
    }
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack);

stack.pop();
stack.pop();
stack.pop();

console.log(stack);
