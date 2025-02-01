import { LinkedList } from "./linked-list";

describe("LinkedList", () => {
  let list: LinkedList<number>;

  describe("when list is empty", () => {
    beforeEach(() => {
      list = new LinkedList();
    });

    it("should prepend element correctly", () => {
      list.prepend(1);

      expect(list.head?.value).toBe(1);
      expect(list.head?.next).toBeNull();
      expect(list.tail?.value).toBe(1);
      expect(list.tail?.next).toBeNull();
    });

    it("should append element correctly", () => {
      list.append(1);

      expect(list.head?.value).toBe(1);
      expect(list.head?.next).toBeNull();
      expect(list.tail?.value).toBe(1);
      expect(list.tail?.next).toBeNull();
    });

    it("should not delete any element", () => {
      list.delete(1);

      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();
      expect(list.length).toBe(0);
    });

    it("should have length of 0", () => {
      expect(list.length).toBe(0);
    });

    it("should be marked as empty", () => {
      expect(list.isEmpty()).toBe(true);
    });

    it("should print empty list", () => {
      expect(list.print()).toBe("[]");
    });

    it("should not iterate over any values", () => {
      expect([...list]).toEqual([]);
    });
  });

  describe("when list has a single element", () => {
    beforeEach(() => {
      list = new LinkedList();
      list.append(1);
    });

    it("should prepend element correctly", () => {
      list.prepend(2);

      expect(list.head?.value).toBe(2);
      expect(list.head?.next?.value).toBe(1);
      expect(list.head?.next?.next).toBeNull();
      expect(list.tail?.value).toBe(1);
      expect(list.tail?.next).toBeNull();
    });

    it("should append element correctly", () => {
      list.append(2);

      expect(list.head?.value).toBe(1);
      expect(list.head?.next?.value).toBe(2);
      expect(list.head?.next?.next).toBeNull();
      expect(list.tail?.value).toBe(2);
      expect(list.tail?.next).toBeNull();
    });

    it("should delete element correctly", () => {
      list.delete(1);

      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();
      expect(list.length).toBe(0);
    });

    it("should have length of 1", () => {
      expect(list.length).toBe(1);
    });

    it("should be marked as not empty", () => {
      expect(list.isEmpty()).toBe(false);
    });

    it("should print list", () => {
      expect(list.print()).toBe("[1]");
    });

    it("should iterate over list", () => {
      expect([...list]).toEqual([1]);
    });
  });

  describe("when list has multiple elements", () => {
    beforeEach(() => {
      list = new LinkedList();
      list.append(1);
      list.append(2);
      list.append(3);
    });

    it("should delete head correctly", () => {
      list.delete(1);

      expect(list.head?.value).toBe(2);
      expect(list.head?.next?.value).toBe(3);
      expect(list.length).toBe(2);
    });

    it("should delete inner element correctly", () => {
      list.delete(2);

      expect(list.head?.value).toBe(1);
      expect(list.head?.next?.value).toBe(3);
      expect(list.head?.next?.next).toBeNull();
      expect(list.tail?.value).toBe(3);
      expect(list.tail?.next).toBeNull();
      expect(list.length).toBe(2);
    });

    it("should delete tail element correctly", () => {
      list.delete(3);

      expect(list.tail?.value).toBe(2);
      expect(list.tail?.next).toBeNull();
      expect(list.length).toBe(2);
    });

    it("should not delete when element not exists", () => {
      list.delete(99);

      expect(list.length).toBe(3);
    });

    it("should have correct length", () => {
      expect(list.length).toBe(3);
    });

    it("should be marked as not empty", () => {
      expect(list.isEmpty()).toBe(false);
    });

    it("should print list", () => {
      expect(list.print()).toBe("[1,2,3]");
    });

    it("should iterate over list", () => {
      expect([...list]).toEqual([1, 2, 3]);
    });
  });
});
