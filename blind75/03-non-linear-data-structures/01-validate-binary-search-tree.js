/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 */
var isValidBST = function (root) {

  function inOrderDFS(node, list) {
    if (node.left) {
      inOrderDFS(node.left, list);
    }

    list.push(node.val);

    if (node.right) {
      inOrderDFS(node.right, list);
    }
  }

  function isListSorted(array) {
    for (let i = 0; i < (list.length - 1); i++) {
      if (list[ i ] >= list[ i + 1 ]) {
        return false;
      }
    }
    return true;
  }

  list = [];
  inOrderDFS(root, list);
  return isListSorted(list);
};
