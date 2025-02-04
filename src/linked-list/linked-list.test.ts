import { DoublyLinkedList } from "./doubly-linked-list";
import { LinkedList } from "./linked-list";
import { SinglyLinkedList } from "./singly-linked-list";

describe.each([
  ["SinglyLinkedList", () => new SinglyLinkedList<number>()],
  ["DoublyLinkedList", () => new DoublyLinkedList<number>()],
])("%s", (_, createLinkedList) => {
  let list: LinkedList<number>;

  describe("when list is empty", () => {
    beforeEach(() => {
      list = createLinkedList();
    });

    it("should not get first element", () => {
      expect(list.getFirst()).toBeNull();
    });

    it("should not get last element", () => {
      expect(list.getLast()).toBeNull();
    });

    it("should add first element", () => {
      list.addFirst(1);

      expect(list.getFirst()).toBe(1);
      expect(list.getLast()).toBe(1);
    });

    it("should add last element", () => {
      list.addLast(1);

      expect(list.getFirst()).toBe(1);
      expect(list.getLast()).toBe(1);
    });

    it("should not remove any elements", () => {
      expect(list.removeFirst()).toBeNull();
      expect(list.removeLast()).toBeNull();
    });

    it("should have size of 0", () => {
      expect(list.size()).toBe(0);
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
      list = createLinkedList();
      list.addLast(1);
    });

    it("should get first element", () => {
      expect(list.getFirst()).toBe(1);
    });

    it("should get last element", () => {
      expect(list.getLast()).toBe(1);
    });

    it("should add first element", () => {
      list.addFirst(2);

      expect(list.getFirst()).toBe(2);
      expect(list.getLast()).toBe(1);
    });

    it("should add last element", () => {
      list.addLast(2);

      expect(list.getFirst()).toBe(1);
      expect(list.getLast()).toBe(2);
    });

    it("should remove first element", () => {
      expect(list.removeFirst()).toBe(1);
      expect(list.getFirst()).toBeNull();
    });

    it("should remove last element", () => {
      expect(list.removeLast()).toBe(1);
      expect(list.getLast()).toBeNull();
    });

    it("should have size of 1", () => {
      expect(list.size()).toBe(1);
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
      list = createLinkedList();
      list.addFirst(4);
      list.removeFirst();
      list.addLast(5);
      list.addFirst(3);
      list.addFirst(2);
      list.addFirst(1);
      list.removeLast();
    });

    it("should get first element", () => {
      expect(list.getFirst()).toBe(1);
    });

    it("should get last element", () => {
      expect(list.getLast()).toBe(3);
    });

    it("should add first element", () => {
      list.addFirst(4);

      expect(list.getFirst()).toBe(4);
      expect(list.getLast()).toBe(3);
    });

    it("should add last element", () => {
      list.addLast(4);

      expect(list.getFirst()).toBe(1);
      expect(list.getLast()).toBe(4);
    });

    it("should remove first element", () => {
      expect(list.removeFirst()).toBe(1);
      expect(list.getFirst()).toBe(2);
    });

    it("should remove first element", () => {
      expect(list.removeLast()).toBe(3);
      expect(list.getLast()).toBe(2);
    });

    it("should have correct size", () => {
      expect(list.size()).toBe(3);
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
