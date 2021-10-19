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

  lookup(value) {
    return this.#lookupHelper(value, this.root);
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

  #lookupHelper(value, node) {
    if (node) {
      if (value === node.value) {
        return node;
      } else {
        return this.#lookupHelper(
          value,
          value > node.value ? node.right : node.left
        );
      }
    }
    return undefined;
  }
}

const tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(tree.lookup(4));

// console.log(JSON.stringify(traverse(tree.root)));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
