/**
 * https://leetcode.com/problems/linked-list-cycle/
 */
var hasCycle = function (head) {
  if (!head) return false;

  let walker = head;
  let runner = head;
  while (walker?.next && runner?.next?.next) {
    walker = walker.next;
    runner = runner.next.next;
    if (walker === runner) {
      return true;
    }
  }
  return false;
};
