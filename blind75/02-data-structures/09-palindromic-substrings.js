/**
 * https://leetcode.com/problems/palindromic-substrings/
 */
var countSubstrings = function (s) {
  let count = 0;

  function countPalindrome(str, left, right) {
    while (left >= 0 && right < str.length && str[ left ] === str[ right ]) {
      count++;
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    countPalindrome(s, i, i);
    countPalindrome(s, i, i + 1);
  }
  return count;
};
