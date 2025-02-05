import { Comparator } from '../common/comparator';
import { ArrayPriorityQueue } from './array-priority-queue';
import { Heap } from './heap';
import { PriorityQueue } from './priority-queue';

type PriorityQueueFactory<T> = () => PriorityQueue<T>;

type Item = {
  priority: number;
  value: number;
};

const comparator: Comparator<Item> = (a, b) =>
  a.priority - b.priority || a.value - b.value;

const arrayPriorityQueueFactory: PriorityQueueFactory<Item> = () =>
  new ArrayPriorityQueue<Item>(comparator);

const heapFactory: PriorityQueueFactory<Item> = () =>
  new Heap<Item>(comparator);

describe.each([
  ['ArrayPriorityQueue', arrayPriorityQueueFactory],
  ['Heap', heapFactory],
])('%s', (_, priorityQueueFactory) => {
  let queue: PriorityQueue<Item>;

  describe('when queue is empty', () => {
    beforeEach(() => {
      queue = priorityQueueFactory();
    });

    it('should not peek any element', () => {
      expect(queue.peek()).toBeNull();
    });

    it('should not dequeue any element', () => {
      expect(queue.dequeue()).toBeNull();
    });

    it('should enqueue element', () => {
      const item = { priority: 1, value: 1 };
      queue.enqueue(item);

      expect(queue.peek()).toBe(item);
    });

    it('should have size of 0', () => {
      expect(queue.size()).toBe(0);
    });

    it('should be marked as empty', () => {
      expect(queue.isEmpty()).toBe(true);
    });

    it('should not iterate over any values', () => {
      expect([...queue]).toHaveLength(0);
    });
  });

  describe('when queue has a single element', () => {
    const itemsByPriority: Item[] = [
      { priority: 0, value: 2 },
      { priority: 1, value: 1 },
      { priority: 1, value: 2 },
      { priority: 2, value: 2 },
    ];

    beforeEach(() => {
      queue = priorityQueueFactory();
      queue.enqueue(itemsByPriority[1]);
    });

    it('should peek first element', () => {
      expect(queue.peek()).toBe(itemsByPriority[1]);
    });

    it('should dequeue element', () => {
      expect(queue.dequeue()).toBe(itemsByPriority[1]);
      expect(queue.peek()).toBeNull();
    });

    it('should enqueue element with higher priority', () => {
      queue.enqueue(itemsByPriority[0]);

      expect(queue.peek()).toBe(itemsByPriority[0]);
    });

    it('should enqueue element after existing ones with same priority', () => {
      queue.enqueue(itemsByPriority[2]);
      queue.dequeue();

      expect(queue.peek()).toBe(itemsByPriority[2]);
    });

    it('should enqueue element with lower priority', () => {
      queue.enqueue(itemsByPriority[3]);
      queue.dequeue();

      expect(queue.peek()).toBe(itemsByPriority[3]);
    });

    it('should have size of 1', () => {
      expect(queue.size()).toBe(1);
    });

    it('should not be marked as empty', () => {
      expect(queue.isEmpty()).toBe(false);
    });

    it('should iterate over queue', () => {
      expect([...queue]).toEqual([itemsByPriority[1]]);
    });
  });

  describe('when queue has multiple elements', () => {
    const itemsByPriority: Item[] = [
      { priority: 0, value: 0 },
      { priority: 1, value: 1 },
      { priority: 2, value: 2 },
      { priority: 3, value: 3 },
      { priority: 4, value: 4 },
      { priority: 5, value: 5 },
      { priority: 5, value: 5 },
      { priority: 6, value: 6 },
    ];

    beforeEach(() => {
      queue = priorityQueueFactory();
      queue.enqueue(itemsByPriority[4]);
      queue.enqueue(itemsByPriority[5]);
      queue.enqueue(itemsByPriority[1]);
      queue.dequeue();
      queue.enqueue(itemsByPriority[2]);
      queue.enqueue(itemsByPriority[3]);
      queue.dequeue();
    });

    it('should peek first element', () => {
      expect(queue.peek()).toBe(itemsByPriority[3]);
    });

    it('should dequeue element with higher priority', () => {
      expect(queue.dequeue()).toBe(itemsByPriority[3]);
      expect(queue.peek()).toBe(itemsByPriority[4]);
    });

    it('should enqueue element with higher priority', () => {
      queue.enqueue(itemsByPriority[0]);

      expect(queue.peek()).toBe(itemsByPriority[0]);
    });

    it('should enqueue element after existing ones with same priority', () => {
      queue.enqueue(itemsByPriority[6]);
      queue.dequeue();
      queue.dequeue();

      expect(queue.peek()).toBe(itemsByPriority[6]);
    });

    it('should enqueue element with lower priority', () => {
      queue.enqueue(itemsByPriority[7]);
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();

      expect(queue.peek()).toBe(itemsByPriority[7]);
    });

    it('should have correct size', () => {
      expect(queue.size()).toBe(3);
    });

    it('should not be marked as empty', () => {
      expect(queue.isEmpty()).toBe(false);
    });

    it('should iterate over queue', () => {
      expect([...queue]).toEqual([
        itemsByPriority[3],
        itemsByPriority[4],
        itemsByPriority[5],
      ]);

      expect([...queue]).toEqual([
        itemsByPriority[3],
        itemsByPriority[4],
        itemsByPriority[5],
      ]);
    });
  });
});
