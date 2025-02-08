import { Comparator } from '../common/comparator';
import { Nullable } from '../common/nullable';
import { LinkedListQueue } from '../queue/linked-list-queue';
import { BinarySearchTreeNode } from './binary-search-tree-node';

export class BinarySearchTree<T> implements Iterable<T> {
  private root: Nullable<BinarySearchTreeNode<T>>;

  constructor(private compareFn: Comparator<T>) {
    this.root = null;
  }

  contains(value: T): boolean {
    return this.containsNode(this.root, value);
  }

  insert(value: T): void {
    this.root = this.insertNode(this.root, value);
  }

  remove(value: T): void {
    this.root = this.removeNode(this.root, value);
  }

  findMin(): Nullable<T> {
    if (!this.root) {
      return null;
    }

    return this.findMinNode(this.root).value;
  }

  findMax(): Nullable<T> {
    if (!this.root) {
      return null;
    }

    return this.findMaxNode(this.root).value;
  }

  isEmpty(): boolean {
    return !this.root;
  }

  *inOrderTraversal(): Generator<T> {
    yield* this.inOrderTraversalNode(this.root);
  }

  *preOrderTraversal(): Generator<T> {
    yield* this.preOrderTraversalNode(this.root);
  }

  *postOrderTraversal(): Generator<T> {
    yield* this.postOrderTraversalNode(this.root);
  }

  *levelOrderTraversal(): Generator<T> {
    const queue = new LinkedListQueue<Nullable<BinarySearchTreeNode<T>>>();
    queue.enqueue(this.root);

    while (!queue.isEmpty()) {
      const node = queue.dequeue();

      if (!node) {
        continue;
      }

      yield node?.value;
      queue.enqueue(node.left);
      queue.enqueue(node.right);
    }
  }

  *[Symbol.iterator](): Generator<T> {
    yield* this.inOrderTraversal();
  }

  private containsNode(
    node: Nullable<BinarySearchTreeNode<T>>,
    value: T,
  ): boolean {
    if (!node) {
      return false;
    }

    if (node.value > value) {
      return this.containsNode(node.left, value);
    }

    if (node.value < value) {
      return this.containsNode(node.right, value);
    }

    return true;
  }

  private insertNode(
    node: Nullable<BinarySearchTreeNode<T>>,
    value: T,
  ): BinarySearchTreeNode<T> {
    if (!node) {
      return new BinarySearchTreeNode(value);
    }

    if (node.value > value) {
      node.left = this.insertNode(node.left, value);
    } else if (node.value < value) {
      node.right = this.insertNode(node.right, value);
    } else {
      throw new Error(`Value ${value} already exists in the tree`);
    }

    return node;
  }

  private removeNode(
    node: Nullable<BinarySearchTreeNode<T>>,
    value: T,
  ): Nullable<BinarySearchTreeNode<T>> {
    if (!node) {
      return null;
    }

    const match = this.compareFn(node.value, value);

    if (match > 0) {
      node.left = this.removeNode(node.left, value);
    } else if (match < 0) {
      node.right = this.removeNode(node.right, value);
    } else if (!node.left) {
      return node.right;
    } else {
      node.value = this.findMaxNode(node.left).value;
      node.left = this.removeNode(node.left, node.value);
    }

    return node;
  }

  private findMinNode(node: BinarySearchTreeNode<T>): BinarySearchTreeNode<T> {
    if (!node.left) {
      return node;
    }

    return this.findMinNode(node.left);
  }

  private findMaxNode(node: BinarySearchTreeNode<T>): BinarySearchTreeNode<T> {
    if (!node.right) {
      return node;
    }

    return this.findMaxNode(node.right);
  }

  private *inOrderTraversalNode(
    node: Nullable<BinarySearchTreeNode<T>>,
  ): Generator<T> {
    if (!node) {
      return;
    }

    yield* this.inOrderTraversalNode(node.left);
    yield node.value;
    yield* this.inOrderTraversalNode(node.right);
  }

  private *preOrderTraversalNode(
    node: Nullable<BinarySearchTreeNode<T>>,
  ): Generator<T> {
    if (!node) {
      return;
    }

    yield node.value;
    yield* this.preOrderTraversalNode(node.left);
    yield* this.preOrderTraversalNode(node.right);
  }

  private *postOrderTraversalNode(
    node: Nullable<BinarySearchTreeNode<T>>,
  ): Generator<T> {
    if (!node) {
      return;
    }

    yield* this.postOrderTraversalNode(node.left);
    yield* this.postOrderTraversalNode(node.right);
    yield node.value;
  }
}
