// 5! = 5 x 4 x 3 x 2 x 1

// O(n)
function factorialRecursive(value) {
  if (value === 1) {
    return 1;
  }
  return value * factorialRecursive(value - 1);
}

// O(n)
function factorialIterative(value) {
  let result = 1;
  for (let i = 1; i <= value; i++) {
    result *= i;
  }
  return result;
}

console.log(factorialRecursive(5));
console.log(factorialIterative(5));
