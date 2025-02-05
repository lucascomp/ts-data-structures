import { Nullable } from '../common/nullable';
import { DoublyLinkedList } from '../linked-list/doubly-linked-list';
import { Deque } from './deque';

export class LinkedListDeque<T> implements Deque<T> {
  private list: DoublyLinkedList<T>;

  constructor() {
    this.list = new DoublyLinkedList();
  }

  peekFirst(): Nullable<T> {
    return this.list.getFirst();
  }

  peekLast(): Nullable<T> {
    return this.list.getLast();
  }

  addFirst(value: T): void {
    this.list.addFirst(value);
  }

  addLast(value: T): void {
    this.list.addLast(value);
  }

  removeFirst(): Nullable<T> {
    return this.list.removeFirst();
  }

  removeLast(): Nullable<T> {
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
