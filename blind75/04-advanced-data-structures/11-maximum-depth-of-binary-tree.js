/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 */
var maxDepth = function (root) {

  function getDepth(node) {
    if (!node) {
      return 0;
    }
    return 1 + Math.max(getDepth(node.left), getDepth(node.right));
  }

  return getDepth(root);
};
