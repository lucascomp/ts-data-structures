import { Nullable } from '../common/nullable';
import { DoublyLinkedList } from '../linked-list/doubly-linked-list';
import { LinkedList } from '../linked-list/linked-list';
import { Stack } from './stack';

export class LinkedListStack<T> implements Stack<T> {
  private list: LinkedList<T>;

  constructor() {
    this.list = new DoublyLinkedList();
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

  *[Symbol.iterator](): Generator<T> {
    yield* this.list;
  }
}
