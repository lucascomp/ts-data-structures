import { Deque } from './deque';
import { LinkedListDeque } from './linked-list-deque';

describe.each([['LinkedListDeque', () => new LinkedListDeque<number>()]])(
  '%s',
  (_, createDeque) => {
    let deque: Deque<number>;

    describe('when deque is empty', () => {
      beforeEach(() => {
        deque = createDeque();
      });

      it('should not peek first element', () => {
        expect(deque.peekFirst()).toBeNull();
      });

      it('should not peek last element', () => {
        expect(deque.peekLast()).toBeNull();
      });

      it('should add first element', () => {
        deque.addFirst(1);

        expect(deque.peekFirst()).toBe(1);
        expect(deque.peekLast()).toBe(1);
      });

      it('should add last element', () => {
        deque.addLast(1);

        expect(deque.peekFirst()).toBe(1);
        expect(deque.peekLast()).toBe(1);
      });

      it('should not remove any elements', () => {
        expect(deque.removeFirst()).toBeNull();
        expect(deque.removeLast()).toBeNull();
      });

      it('should have size of 0', () => {
        expect(deque.size()).toBe(0);
      });

      it('should be marked as empty', () => {
        expect(deque.isEmpty()).toBe(true);
      });

      it('should not iterate over any values', () => {
        expect([...deque]).toEqual([]);
      });
    });

    describe('when deque has a single element', () => {
      beforeEach(() => {
        deque = createDeque();
        deque.addLast(1);
      });

      it('should peek first element', () => {
        expect(deque.peekFirst()).toBe(1);
      });

      it('should peek last element', () => {
        expect(deque.peekLast()).toBe(1);
      });

      it('should add first element', () => {
        deque.addFirst(2);

        expect(deque.peekFirst()).toBe(2);
        expect(deque.peekLast()).toBe(1);
      });

      it('should add last element', () => {
        deque.addLast(2);

        expect(deque.peekFirst()).toBe(1);
        expect(deque.peekLast()).toBe(2);
      });

      it('should remove first element', () => {
        expect(deque.removeFirst()).toBe(1);
        expect(deque.peekFirst()).toBeNull();
      });

      it('should remove last element', () => {
        expect(deque.removeLast()).toBe(1);
        expect(deque.peekLast()).toBeNull();
      });

      it('should have size of 1', () => {
        expect(deque.size()).toBe(1);
      });

      it('should be marked as not empty', () => {
        expect(deque.isEmpty()).toBe(false);
      });

      it('should iterate over deque', () => {
        expect([...deque]).toEqual([1]);
      });
    });

    describe('when deque has multiple elements', () => {
      beforeEach(() => {
        deque = createDeque();
        deque.addFirst(4);
        deque.removeFirst();
        deque.addLast(5);
        deque.addFirst(3);
        deque.addFirst(2);
        deque.addFirst(1);
        deque.removeLast();
      });

      it('should peek first element', () => {
        expect(deque.peekFirst()).toBe(1);
      });

      it('should peek last element', () => {
        expect(deque.peekLast()).toBe(3);
      });

      it('should add first element', () => {
        deque.addFirst(4);

        expect(deque.peekFirst()).toBe(4);
        expect(deque.peekLast()).toBe(3);
      });

      it('should add last element', () => {
        deque.addLast(4);

        expect(deque.peekFirst()).toBe(1);
        expect(deque.peekLast()).toBe(4);
      });

      it('should remove first element', () => {
        expect(deque.removeFirst()).toBe(1);
        expect(deque.peekFirst()).toBe(2);
      });

      it('should remove last element', () => {
        expect(deque.removeLast()).toBe(3);
        expect(deque.peekLast()).toBe(2);
      });

      it('should have correct size', () => {
        expect(deque.size()).toBe(3);
      });

      it('should be marked as not empty', () => {
        expect(deque.isEmpty()).toBe(false);
      });

      it('should iterate over deque', () => {
        expect([...deque]).toEqual([1, 2, 3]);
      });
    });
  },
);
