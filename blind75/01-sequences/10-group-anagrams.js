/**
 * https://leetcode.com/problems/group-anagrams/
 */
var groupAnagrams = function (strs) {
  const map = new Map();

  for (const word of strs) {
    const sortedWord = word.split('').sort().join('');
    if (map.has(sortedWord)) {
      const otherWords = map.get(sortedWord);
      map.set(sortedWord, [ word, ...otherWords ]);
    } else {
      map.set(sortedWord, [ word ]);
    }
  }

  const result = [];
  for (const [ sorted, words ] of map) {
    result.push(words);
  }
  return result;
};
