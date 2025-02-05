import { ArrayStack } from './array-stack';
import { LinkedListStack } from './linked-list-stack';
import { Stack } from './stack';

describe.each([
  ['ArrayStack', () => new ArrayStack<number>()],
  ['LinkedListStack', () => new LinkedListStack<number>()],
])('%s', (_, createStack) => {
  let stack: Stack<number>;

  describe('when stack is empty', () => {
    beforeEach(() => {
      stack = createStack();
    });

    it('should not peek any element', () => {
      expect(stack.peek()).toBeNull();
    });

    it('should push element', () => {
      stack.push(1);

      expect(stack.peek()).toBe(1);
    });

    it('should not pop any element', () => {
      expect(stack.pop()).toBeNull();
    });

    it('should have size of 0', () => {
      expect(stack.size()).toBe(0);
    });

    it('should be marked as empty', () => {
      expect(stack.isEmpty()).toBe(true);
    });

    it('should print empty stack', () => {
      expect(stack.toString()).toBe('[]');
    });

    it('should not iterate over any values', () => {
      expect([...stack]).toEqual([]);
    });
  });

  describe('when stack has a single element', () => {
    beforeEach(() => {
      stack = createStack();
      stack.push(1);
    });

    it('should peek element', () => {
      expect(stack.peek()).toBe(1);
    });

    it('should push element at the end', () => {
      stack.push(2);

      expect(stack.peek()).toBe(2);
    });

    it('should pop element', () => {
      expect(stack.pop()).toBe(1);
      expect(stack.peek()).toBeNull();
    });

    it('should have size of 1', () => {
      expect(stack.size()).toBe(1);
    });

    it('should not be marked as empty', () => {
      expect(stack.isEmpty()).toBe(false);
    });

    it('should print stack', () => {
      expect(stack.toString()).toEqual('[1]');
    });

    it('should not iterate over any values', () => {
      expect([...stack]).toEqual([1]);
    });
  });

  describe('when stack has multiple elements', () => {
    beforeEach(() => {
      stack = createStack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
    });

    it('should peek element', () => {
      expect(stack.peek()).toBe(3);
    });

    it('should push element', () => {
      stack.push(4);

      expect(stack.peek()).toBe(4);
    });

    it('should pop element', () => {
      expect(stack.pop()).toBe(3);
      expect(stack.peek()).toBe(2);
    });

    it('should have correct size', () => {
      expect(stack.size()).toBe(3);
    });

    it('should not be marked as empty', () => {
      expect(stack.isEmpty()).toBe(false);
    });

    it('should print stack', () => {
      expect(stack.toString()).toEqual('[1,2,3]');
    });

    it('should not iterate over any values', () => {
      expect([...stack]).toEqual([1, 2, 3]);
    });
  });
});
