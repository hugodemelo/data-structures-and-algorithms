/**
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[ middle ] > nums[ right ]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }
  return nums[ left ];
};
