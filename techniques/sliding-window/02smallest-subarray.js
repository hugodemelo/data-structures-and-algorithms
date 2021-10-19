/**
 * Find the smallest subarray that is equal or great than k.
 *
 * This problem uses a dynamic window.
 */
function smallestSubArray(nums, k) {
  let minWindowSize = Infinity;
  let currentWindowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    currentWindowSum += nums[ windowEnd ];

    while (currentWindowSum >= k) {
      minWindowSize = Math.min(minWindowSize, windowEnd - windowStart + 1);
      currentWindowSum -= nums[ windowStart ];
      windowStart++;
    }
  }
  return minWindowSize;
}

const nums = [ 4, 2, 2, 7, 8, 1, 2, 8, 10 ];
console.log(smallestSubArray(nums, 8));
