import { Comparator } from '../common/comparator';
import { BinarySearchTree } from './binary-search-tree';

const comparator: Comparator<number> = (a, b) => a - b;

describe('BinarySearchTree', () => {
  let tree: BinarySearchTree<number>;

  describe('when binary search tree has no nodes', () => {
    beforeEach(() => {
      tree = new BinarySearchTree(comparator);
    });

    it('should not contain any values', () => {
      expect(tree.contains(10)).toBe(false);
    });

    it('should insert value', () => {
      tree.insert(10);

      expect(tree.contains(10)).toBe(true);
    });

    it('should not remove non-existing values', () => {
      expect(() => tree.remove(10)).toThrow();
    });

    it('should not find any min value', () => {
      expect(tree.findMin()).toBeNull();
    });

    it('should not find any max value', () => {
      expect(tree.findMax()).toBeNull();
    });

    it('should be marked as empty', () => {
      expect(tree.isEmpty()).toBe(true);
    });

    it('should not traverse in order', () => {
      expect([...tree.inOrderTraversal()]).toEqual([]);
    });

    it('should not traverse pre order', () => {
      expect([...tree.preOrderTraversal()]).toEqual([]);
    });

    it('should not traverse post order', () => {
      expect([...tree.postOrderTraversal()]).toEqual([]);
    });

    it('should not traverse level order', () => {
      expect([...tree.levelOrderTraversal()]).toEqual([]);
    });

    it('should not iterate over any values', () => {
      expect([...tree]).toEqual([]);
    });
  });

  describe('when binary search tree has a single node', () => {
    beforeEach(() => {
      tree = new BinarySearchTree(comparator);
      tree.insert(10);
    });

    it('should contain existing value', () => {
      expect(tree.contains(10)).toBe(true);
    });

    it('should not contain non-existing value', () => {
      expect(tree.contains(20)).toBe(false);
    });

    it('should insert value', () => {
      tree.insert(20);

      expect(tree.contains(20)).toBe(true);
    });

    it('should not insert existing value', () => {
      expect(() => tree.insert(10)).toThrow();
    });

    it('should remove value', () => {
      tree.remove(10);

      expect(tree.contains(10)).toBe(false);
    });

    it('should not remove non-existing values', () => {
      expect(() => tree.remove(20)).toThrow();
    });

    it('should find min value', () => {
      expect(tree.findMin()).toBe(10);
    });

    it('should find max value', () => {
      expect(tree.findMax()).toBe(10);
    });

    it('should be marked as not empty', () => {
      expect(tree.isEmpty()).toBe(false);
    });

    it('should traverse in order', () => {
      expect([...tree.inOrderTraversal()]).toEqual([10]);
    });

    it('should traverse pre order', () => {
      expect([...tree.preOrderTraversal()]).toEqual([10]);
    });

    it('should traverse post order', () => {
      expect([...tree.postOrderTraversal()]).toEqual([10]);
    });

    it('should traverse level order', () => {
      expect([...tree.levelOrderTraversal()]).toEqual([10]);
    });

    it('should iterate over values in order', () => {
      expect([...tree]).toEqual([10]);
    });
  });

  describe('when binary search tree has multiple nodes', () => {
    beforeEach(() => {
      tree = new BinarySearchTree(comparator);
      tree.insert(50);
      tree.insert(30);
      tree.insert(70);
      tree.insert(20);
      tree.insert(40);
      tree.insert(60);
      tree.insert(80);
      tree.remove(50);
      tree.remove(70);
      tree.remove(30);
      tree.remove(60);
      tree.remove(20);
      tree.remove(80);
      tree.insert(20);
      tree.insert(60);
      tree.insert(10);
      tree.insert(70);
      tree.insert(30);
      tree.insert(50);
    });

    it('should contain existing values', () => {
      expect(tree.contains(10)).toBe(true);
      expect(tree.contains(20)).toBe(true);
      expect(tree.contains(30)).toBe(true);
      expect(tree.contains(40)).toBe(true);
      expect(tree.contains(50)).toBe(true);
      expect(tree.contains(60)).toBe(true);
      expect(tree.contains(70)).toBe(true);
    });

    it('should not contain removed values', () => {
      expect(tree.contains(80)).toBe(false);
    });

    it('should not contain non-existing value', () => {
      expect(tree.contains(25)).toBe(false);
    });

    it('should insert value', () => {
      tree.insert(25);

      expect(tree.contains(25)).toBe(true);
    });

    it('should not insert existing value', () => {
      expect(() => tree.insert(40)).toThrow();
    });

    it('should remove value at root', () => {
      tree.remove(40);

      expect(tree.contains(40)).toBe(false);
    });

    it('should not remove non-existing values', () => {
      expect(() => tree.remove(100)).toThrow();
    });

    it('should remove value not at root with left and right children', () => {
      tree.remove(20);

      expect(tree.contains(20)).toBe(false);
    });

    it('should remove value not at root with left child only', () => {
      tree.remove(70);
      tree.remove(60);

      expect(tree.contains(60)).toBe(false);
    });

    it('should remove value not at root with right child only', () => {
      tree.remove(10);
      tree.remove(20);

      expect(tree.contains(20)).toBe(false);
    });

    it('should remove value not at root with no children', () => {
      tree.remove(50);

      expect(tree.contains(50)).toBe(false);
    });

    it('should find any min value', () => {
      expect(tree.findMin()).toBe(10);
    });

    it('should find any max value', () => {
      expect(tree.findMax()).toBe(70);
    });

    it('should be marked as not empty', () => {
      expect(tree.isEmpty()).toBe(false);
    });

    it('should traverse in order', () => {
      expect([...tree.inOrderTraversal()]).toEqual([
        10, 20, 30, 40, 50, 60, 70,
      ]);
    });

    it('should traverse pre order', () => {
      expect([...tree.preOrderTraversal()]).toEqual([
        40, 20, 10, 30, 60, 50, 70,
      ]);
    });

    it('should traverse post order', () => {
      expect([...tree.postOrderTraversal()]).toEqual([
        10, 30, 20, 50, 70, 60, 40,
      ]);
    });

    it('should traverse level order', () => {
      expect([...tree.levelOrderTraversal()]).toEqual([
        40, 20, 60, 10, 30, 50, 70,
      ]);
    });

    it('should iterate over values in order', () => {
      expect([...tree]).toEqual([10, 20, 30, 40, 50, 60, 70]);
    });
  });
});
