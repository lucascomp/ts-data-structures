import { Stack } from "./stack";

describe("Stack", () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack();
  });

  describe("push", () => {
    it("should push new values at the top of the stack", () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.peek()).toBe(3);
    });
  });

  describe("pop", () => {
    it("should pop values at the top of the stack", () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      const popped = stack.pop();

      expect(popped).toBe(3);
      expect(stack.peek()).toBe(2);
    });

    it("should not pop values when stack is empty", () => {
      const popped = stack.pop();

      expect(popped).toBeUndefined();
    });
  });

  describe("peek", () => {
    it("should peek values at the top of the stack", () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.peek()).toBe(3);
    });

    it("should not peek any values when stack is empty", () => {
      expect(stack.peek()).toBeUndefined();
    });
  });

  describe("isEmpty", () => {
    it("should return true when stack is empty", () => {
      expect(stack.isEmpty()).toBe(true);
    });

    it("should return false when stack is not empty", () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.isEmpty()).toBe(false);
    });
  });

  describe("size", () => {
    it("should return the size of the stack", () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.size()).toBe(3);
    });
  });

  describe("print", () => {
    it("should return stringified stack", () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.print()).toBe("[1,2,3]");
    });
  });
});
