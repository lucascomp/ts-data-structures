import { Nullable } from '../common/nullable';
import { SinglyLinkedList } from '../linked-list/singly-linked-list';
import { Queue } from './queue';

export class LinkedListQueue<T> implements Queue<T> {
  private list: SinglyLinkedList<T>;

  constructor() {
    this.list = new SinglyLinkedList();
  }

  peek(): Nullable<T> {
    return this.list.getFirst();
  }

  enqueue(value: T): void {
    this.list.addLast(value);
  }

  dequeue(): Nullable<T> {
    return this.list.removeFirst();
  }

  isEmpty(): boolean {
    return this.list.isEmpty();
  }

  size(): number {
    return this.list.size();
  }

  *[Symbol.iterator](): Generator<T> {
    yield* this.list;
  }
}
