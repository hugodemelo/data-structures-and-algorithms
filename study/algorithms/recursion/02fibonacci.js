// 0, 1, 1, 2, 3, 5, 8, 13, ...

// O(2^n)
function nthFibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return nthFibonacciRecursive(n - 1) + nthFibonacciRecursive(n - 2);
}

// O(n)
function nthFibonacciIterative(n) {
  let a = 0;
  let b = 1;
  while (n--) {
    [a, b] = [b, a + b];
  }
  return a;
}

console.log(nthFibonacciRecursive(0));
console.log(nthFibonacciRecursive(1));
console.log(nthFibonacciRecursive(2));
console.log(nthFibonacciRecursive(3));
console.log(nthFibonacciRecursive(4));
console.log(nthFibonacciRecursive(5));

console.log(nthFibonacciIterative(0));
console.log(nthFibonacciIterative(1));
console.log(nthFibonacciIterative(2));
console.log(nthFibonacciIterative(3));
console.log(nthFibonacciIterative(4));
console.log(nthFibonacciIterative(5));
