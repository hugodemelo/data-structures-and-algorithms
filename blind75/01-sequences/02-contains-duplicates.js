/**
 * https://leetcode.com/problems/contains-duplicate/
 */
var containsDuplicate = function (nums) {
  const set = new Set();
  for (let value of nums) {
    if (set.has(value)) {
      return true;
    }
    set.add(value);
  }
  return false;
};
