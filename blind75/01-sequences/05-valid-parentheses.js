/**
 * https://leetcode.com/problems/valid-parentheses/
 */
var isValid = function (s) {
  const reversed = {
    '(': ')',
    ')': '(',
    '[': ']',
    ']': '[',
    '{': '}',
    '}': '{',
  };

  const isOpen = ch => ch === '{' || ch === '[' || ch === '(';

  const stack = [];
  for (let char of s) {
    if (!stack.length) {
      if (isOpen(char)) {
        stack.push(char);
      } else {
        return false;
      }
    } else {
      if (isOpen(char)) {
        stack.push(char);
      } else {
        if (stack[ stack.length - 1 ] === reversed[ char ]) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  return !stack.length;
};
