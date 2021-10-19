// given an array, return the first recurring character
// [2, 3, 4, 2, 5]  // 2
// [2, 1, 1, 4, 1]  // 1
// [1, 2, 3, 4, 5]  // undefined

function firstRecurring(array) {
  // O(n) because worst case you have to go through all the elements
  const map = new Map();
  for (let i = 0; i < array.length; i++) {
    if (map.has(array[i])) {
      return array[i];
    } else {
      map.set(array[i]);
    }
  }
  return undefined;
}

console.log(firstRecurring([2, 3, 4, 2, 5]));
console.log(firstRecurring([2, 1, 1, 4, 1]));
console.log(firstRecurring([1, 2, 3, 4, 5]));
