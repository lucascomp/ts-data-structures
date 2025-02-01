import { Queue } from "./queue";

describe("Queue", () => {
  let queue: Queue<number>;

  describe("when queue is empty", () => {
    beforeEach(() => {
      queue = new Queue();
    });

    it("should enqueue element correctly", () => {
      queue.enqueue(1);

      expect(queue.peek()).toBe(1);
    });

    it("should not dequeue any element", () => {
      expect(queue.dequeue()).toBeUndefined();
    });

    it("should not peek any element", () => {
      expect(queue.peek()).toBeUndefined();
    });

    it("should have length of 0", () => {
      expect(queue.length).toBe(0);
    });

    it("should be marked as empty", () => {
      expect(queue.isEmpty()).toBe(true);
    });

    it("should print empty queue", () => {
      expect(queue.print()).toBe("[]");
    });

    it("should not iterate over any values", () => {
      expect([...queue]).toHaveLength(0);
    });
  });

  describe("when queue has a single element", () => {
    beforeEach(() => {
      queue = new Queue();
      queue.enqueue(1);
    });

    it("should enqueue element at the beginning", () => {
      expect(queue.peek()).toBe(1);
      queue.enqueue(2);
      expect(queue.peek()).toBe(1);
    });

    it("should dequeue element correctly", () => {
      expect(queue.peek()).toBe(1);
      expect(queue.dequeue()).toBe(1);
      expect(queue.peek()).toBeUndefined();
    });

    it("should peek first element", () => {
      expect(queue.peek()).toBe(1);
    });

    it("should have length of 1", () => {
      expect(queue.length).toBe(1);
    });

    it("should not be marked as empty", () => {
      expect(queue.isEmpty()).toBe(false);
    });

    it("should print queue correctly", () => {
      expect(queue.print()).toBe("[1]");
    });

    it("should iterate over queue", () => {
      expect([...queue]).toEqual([1]);
    });
  });

  describe("when queue has multiple elements", () => {
    beforeEach(() => {
      queue = new Queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
    });

    it("should enqueue element at the beginning", () => {
      queue.enqueue(4);

      expect(queue.dequeue()).toBe(1);
      expect(queue.dequeue()).toBe(2);
      expect(queue.dequeue()).toBe(3);
      expect(queue.dequeue()).toBe(4);
      expect(queue.dequeue()).toBeUndefined();
    });

    it("should dequeue element at the beginning", () => {
      expect(queue.peek()).toBe(1);
      expect(queue.dequeue()).toBe(1);
      expect(queue.peek()).toBe(2);
    });

    it("should peek first element", () => {
      expect(queue.peek()).toBe(1);
    });

    it("should have correct length", () => {
      expect(queue.length).toBe(3);
    });

    it("should not be marked as empty", () => {
      expect(queue.isEmpty()).toBe(false);
    });

    it("should print queue correctly", () => {
      expect(queue.print()).toBe("[1,2,3]");
    });

    it("should iterate over queue", () => {
      expect([...queue]).toEqual([1, 2, 3]);
    });
  });
});
