import { ArrayPriorityQueue } from "./array-priority-queue";
import { PriorityQueue } from "./priority-queue";

describe.each([
  ["ArrayPriorityQueue", () => new ArrayPriorityQueue<number>((a, b) => a - b)],
])("%s", (_, createQueue) => {
  let queue: PriorityQueue<number>;

  describe("when queue is empty", () => {
    beforeEach(() => {
      queue = createQueue();
    });

    it("should not peek any element", () => {
      expect(queue.peek()).toBeNull();
    });

    it("should not dequeue any element", () => {
      expect(queue.dequeue()).toBeNull();
    });

    it("should enqueue element", () => {
      queue.enqueue(1);

      expect(queue.peek()).toBe(1);
    });

    it("should have size of 0", () => {
      expect(queue.size()).toBe(0);
    });

    it("should be marked as empty", () => {
      expect(queue.isEmpty()).toBe(true);
    });

    it("should print empty queue", () => {
      expect(queue.toString()).toBe("[]");
    });

    it("should not iterate over any values", () => {
      expect([...queue]).toHaveLength(0);
    });
  });

  describe("when queue has a single element", () => {
    beforeEach(() => {
      queue = createQueue();
      queue.enqueue(1);
    });

    it("should peek first element", () => {
      expect(queue.peek()).toBe(1);
    });

    it("should dequeue element", () => {
      expect(queue.dequeue()).toBe(1);
      expect(queue.peek()).toBeNull();
    });

    it("should enqueue element with higher priority", () => {
      queue.enqueue(0);

      expect(queue.peek()).toBe(0);
    });

    it("should enqueue element after existing ones with same priority", () => {
      queue.enqueue(1);
      queue.dequeue();

      expect(queue.peek()).toBe(1);
    });

    it("should enqueue element with lower priority", () => {
      queue.enqueue(2);
      queue.dequeue();

      expect(queue.peek()).toBe(2);
    });

    it("should have size of 1", () => {
      expect(queue.size()).toBe(1);
    });

    it("should not be marked as empty", () => {
      expect(queue.isEmpty()).toBe(false);
    });

    it("should print queue", () => {
      expect(queue.toString()).toBe("[1]");
    });

    it("should iterate over queue", () => {
      expect([...queue]).toEqual([1]);
    });
  });

  describe("when queue has multiple elements", () => {
    beforeEach(() => {
      queue = createQueue();
      queue.enqueue(4);
      queue.enqueue(5);
      queue.enqueue(1);
      queue.dequeue();
      queue.enqueue(2);
      queue.enqueue(3);
      queue.dequeue();
    });

    it("should peek first element", () => {
      expect(queue.peek()).toBe(3);
    });

    it("should dequeue element with higher priority", () => {
      expect(queue.dequeue()).toBe(3);
      expect(queue.peek()).toBe(4);
    });

    it("should enqueue element with higher priority", () => {
      queue.enqueue(0);

      expect(queue.peek()).toBe(0);
    });

    it("should enqueue element after existing ones with same priority", () => {
      queue.enqueue(4);
      queue.dequeue();
      queue.dequeue();

      expect(queue.peek()).toBe(4);
    });

    it("should enqueue element with lower priority", () => {
      queue.enqueue(6);
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();

      expect(queue.peek()).toBe(6);
    });

    it("should have correct size", () => {
      expect(queue.size()).toBe(3);
    });

    it("should not be marked as empty", () => {
      expect(queue.isEmpty()).toBe(false);
    });

    it("should print queue", () => {
      expect(queue.toString()).toBe("[3,4,5]");
    });

    it("should iterate over queue", () => {
      expect([...queue]).toEqual([3, 4, 5]);
    });
  });
});
