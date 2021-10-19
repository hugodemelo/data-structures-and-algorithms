/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */
var lengthOfLongestSubstring = function (s) {
  let counter = 0;

  const set = new Set();
  for (let start = 0; start < s.length; start++) {
    let end = start;
    while (!set.has(s[ end ]) && end < s.length) {
      set.add(s[ end ]);
      end++;
    }
    counter = Math.max(counter, end - start);
    set.clear();
  }
  return counter;
};
