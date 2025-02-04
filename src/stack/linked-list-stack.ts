import { Nullable } from "../common/nullable";
import { LinkedList } from "../linked-list/linked-list";
import { SinglyLinkedList } from "../linked-list/singly-linked-list";
import { Stack } from "./stack";

export class LinkedListStack<T> implements Stack<T> {
  private list: LinkedList<T>;

  constructor() {
    this.list = new SinglyLinkedList();
  }

  peek(): Nullable<T> {
    return this.list.getLast();
  }

  push(value: T): void {
    return this.list.addLast(value);
  }

  pop(): Nullable<T> {
    return this.list.removeLast();
  }

  size(): number {
    return this.list.size();
  }

  isEmpty(): boolean {
    return this.list.isEmpty();
  }

  print(): string {
    return this.list.print();
  }

  *[Symbol.iterator](): Generator<T> {
    yield* this.list;
  }
}
