class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(value) {
    this.data[this.length++] = value;
    return this.length;
  }

  pop() {
    const value = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return value;
  }

  delete(index) {
    const value = this.data[index];
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return value;
  }
}

const array = new MyArray();
array.push(10);
array.push(20);
array.push(30);

array.pop();
array.delete(0);
console.log(array);
