/**
 * https://leetcode.com/problems/implement-trie-prefix-tree/
 */
class Node {
  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      node.children[char] = node.children[char] || new Node();
      node = node.children[char];
    }
    node.isWord = true;
  }

  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isWord;
  }

  startsWith(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }

  prefixSearch(prefix) {
    let node = this.root;
    for (const char of prefix) {
      node = node.children[char];
      if (!node) {
        return [];
      }
    }

    const result = [];
    const stack = [{ node, prefix }];
    while (stack.length) {
      const { node, prefix } = stack.pop();

      if (node.isWord) {
        result.push(prefix);
      }

      for (const [char, child] of Object.entries(node.children)) {
        stack.push({ node: child, prefix: prefix + char })
      }
    }

    return result;
  }
}

const trie = new Trie();
console.log(trie.insert("apple"));
console.log(trie.search("apple"));
console.log(trie.search("app"));
console.log(trie.startsWith("app"));
console.log(trie.insert("app"));
console.log(trie.search("app"));
