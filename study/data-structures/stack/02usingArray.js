class Stack {
  constructor() {
    this.buffer = [];
  }

  peek() {
    return this.buffer[this.buffer.length - 1];
  }

  push(value) {
    this.buffer.push(value);
  }

  pop() {
    return this.buffer.pop();
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
