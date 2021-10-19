/**
 * https://leetcode.com/problems/top-k-frequent-elements/
 */
var topKFrequent = function (nums, k) {
  const map = new Map();

  for (const num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  const bucket = new Array(nums.length + 1);
  for (const [ key, value ] of map) {
    if (bucket[ value ] !== undefined) {
      bucket[ value ] = [ ...bucket[ value ], key ];
    } else {
      bucket[ value ] = [ key ];
    }
  }

  const result = [];
  for (let i = (bucket.length - 1); i >= 0; i--) {
    if (bucket[ i ] !== undefined) {
      result.push(...bucket[ i ]);
    }
    if (result.length >= k) {
      break;
    }
  }
  return result.slice(0, k);
};
