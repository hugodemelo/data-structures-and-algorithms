class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this.#insertHelper(value, this.root);
  }

  #insertHelper(value, node) {
    if (node === null) {
      return new Node(value);
    } else {
      if (value >= node.value) {
        node.right = this.#insertHelper(value, node.right);
      } else {
        node.left = this.#insertHelper(value, node.left);
      }
      return node;
    }
  }

  breathFirstSearch() {
    const result = [];
    const queue = [ this.root ];

    while (queue.length) {
      const elem = queue.shift();
      result.push(elem.value);
      if (elem.left) {
        queue.push(elem.left);
      }
      if (elem.right) {
        queue.push(elem.right);
      }
    }
    return result;
  }

  /**
   * InOrder -> 1, 4, 6, 9, 15, 20, 170
   * PreOrder -> 9, 4, 1, 6, 20, 15, 170
   * PostOrder -> 1, 6, 4, 15, 170, 20, 9
   */
  depthFirstSearch(node = this.root, list = []) {
    // list.push(node.value); // PreOrder
    if (node.left) {
      this.depthFirstSearch(node.left, list);
    }
    list.push(node.value); // InOrder
    if (node.right) {
      this.depthFirstSearch(node.right, list);
    }
    // list.push(node.value); // PostOrder

    return list;
  }
}

//       9
//   4       20
// 1   6  15    170

const tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log('BFS');
console.log(tree.breathFirstSearch());

console.log('DFS');
console.log(tree.depthFirstSearch());
