/**
 * https://leetcode.com/problems/valid-anagram/
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sortedStr1 = s.split('').sort().join('');
  const sortedStr2 = t.split('').sort().join('');

  return sortedStr1 === sortedStr2;
};
