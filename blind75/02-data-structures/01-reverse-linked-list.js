/**
 * https://leetcode.com/problems/reverse-linked-list/
 */
var reverseList = function (head) {
  if (!head) return head;

  let first = head;
  let middle = head.next;
  head.next = null;
  while (middle) {
    let last = middle.next;
    middle.next = first;
    first = middle;
    middle = last;
  }
  head = first;
  return head;
};
