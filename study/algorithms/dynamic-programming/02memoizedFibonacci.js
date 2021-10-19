function memoized() {
  const cache = {};
  return {
    has: function (n) {
      return n in cache;
    },
    lookup: function (n) {
      return cache[ n ];
    },
    set: function (n, result) {
      cache[ n ] = result;
    }
  }
}

const memo = memoized();

function fibonacciWithMemoization(n) {
  if (memo.has(n)) {
    return memo.lookup(n);
  }
  if (n < 2) {
    memo.set(n, n);
    return n;
  }
  const result = fibonacciWithMemoization(n - 1) + fibonacciWithMemoization(n - 2);
  memo.set(n, result);
  return result;
}

console.log(fibonacciWithMemoization(45));
