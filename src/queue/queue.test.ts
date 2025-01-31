import { Queue } from "./queue";

describe("Queue", () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue();
  });

  describe("enqueue", () => {
    it("should push new values at the end of the queue", () => {
      queue.enqueue(1);
      queue.enqueue(2);

      expect(queue.peek()).toBe(1);
    });
  });

  describe("dequeue", () => {
    it("should dequeue values at the beginning of the queue", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      const dequeued = queue.dequeue();

      expect(dequeued).toBe(1);
      expect(queue.peek()).toBe(2);
    });

    it("should not dequeue values when queue is empty", () => {
      const dequeued = queue.dequeue();

      expect(dequeued).toBeUndefined();
    });
  });

  describe("peek", () => {
    it("should peek values at the beginning of the queue", () => {
      queue.enqueue(1);
      queue.enqueue(2);

      expect(queue.peek()).toBe(1);
    });

    it("should not peek any values when queue is empty", () => {
      expect(queue.peek()).toBeUndefined();
    });
  });

  describe("isEmpty", () => {
    it("should return true when queue is empty", () => {
      expect(queue.isEmpty()).toBe(true);
    });

    it("should return false when queue is not empty", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.isEmpty()).toBe(false);
    });
  });

  describe("size", () => {
    it("should return the size of the queue", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.dequeue();

      expect(queue.size()).toBe(2);
    });
  });

  describe("print", () => {
    it("should return stringified queue", () => {
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.dequeue();

      expect(queue.print()).toBe("[2,3]");
    });
  });
});
