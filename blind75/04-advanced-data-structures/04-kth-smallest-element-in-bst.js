/**
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 */
var kthSmallest = function (root, k) {

  function inOrderDFS(node, list) {
    if (node.left) {
      inOrderDFS(node.left, list);
    }

    list.push(node.val);

    if (node.right) {
      inOrderDFS(node.right, list);
    }
  }

  list = [];
  inOrderDFS(root, list);

  return list[ k - 1 ];
};
