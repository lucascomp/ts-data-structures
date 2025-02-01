import { Stack } from "./stack";

describe("Stack", () => {
  let stack: Stack<number>;

  describe("when stack is empty", () => {
    beforeEach(() => {
      stack = new Stack();
    });

    it("should push element correctly", () => {
      stack.push(1);

      expect(stack.peek()).toBe(1);
    });

    it("should not pop any element", () => {
      expect(stack.pop()).toBeUndefined();
    });

    it("should not peek any element", () => {
      expect(stack.peek()).toBeUndefined();
    });

    it("should have length of 0", () => {
      expect(stack.length).toBe(0);
    });

    it("should be marked as empty", () => {
      expect(stack.isEmpty()).toBe(true);
    });

    it("should print empty stack", () => {
      expect(stack.print()).toBe("[]");
    });

    it("should not iterate over any values", () => {
      expect([...stack]).toEqual([]);
    });
  });

  describe("when stack has a single element", () => {
    beforeEach(() => {
      stack = new Stack();
      stack.push(1);
    });

    it("should push element at the end", () => {
      stack.push(2);

      expect(stack.peek()).toBe(2);
    });

    it("should pop element correctly", () => {
      expect(stack.pop()).toBe(1);
    });

    it("should peek element correctly", () => {
      expect(stack.peek()).toBe(1);
    });

    it("should have length of 1", () => {
      expect(stack.length).toBe(1);
    });

    it("should not be marked as empty", () => {
      expect(stack.isEmpty()).toBe(false);
    });

    it("should print stack correctly", () => {
      expect(stack.print()).toEqual("[1]");
    });

    it("should not iterate over any values", () => {
      expect([...stack]).toEqual([1]);
    });
  });

  describe("when stack has multiple elements", () => {
    beforeEach(() => {
      stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
    });

    it("should push element correctly", () => {
      stack.push(4);

      expect(stack.peek()).toBe(4);
    });

    it("should pop element correctly", () => {
      expect(stack.pop()).toBe(3);
    });

    it("should peek element correctly", () => {
      expect(stack.peek()).toBe(3);
    });

    it("should have correct length", () => {
      expect(stack.length).toBe(3);
    });

    it("should not be marked as empty", () => {
      expect(stack.isEmpty()).toBe(false);
    });

    it("should print stack correctly", () => {
      expect(stack.print()).toEqual("[1,2,3]");
    });

    it("should not iterate over any values", () => {
      expect([...stack]).toEqual([1, 2, 3]);
    });
  });
});
