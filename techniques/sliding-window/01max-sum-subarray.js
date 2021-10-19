/**
 * Find the max sum subarray of a fixed size k.
 *
 * This problem uses a fixed size window.
 */

function findSum(array, k) {
  let current = 0;
  let max = -Infinity;

  for (let i = 0; i < array.length; i++) {
    current += array[ i ];
    if (i >= (k - 1)) {
      max = Math.max(max, current);
      current -= array[ i - (k - 1) ];
    }
  }
  return max;
}

const nums = [ 4, 2, 1, 7, 8, 1, 2, 8, 1, 0 ];
console.log(findSum(nums, 3));
