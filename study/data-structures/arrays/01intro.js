const strings = ['a', 'b', 'c', 'd'];

// push O(1)
strings.push('e');

// pop O(1)
strings.pop();

//unshift O(n)
strings.unshift('x');

// splice O(n)
strings.splice(2, 0, 'alien');

strings.shift();

console.log(strings);
