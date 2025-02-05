import { Nullable } from '../common/nullable';
import { LinkedList } from './linked-list';
import { LinkedListNode } from './linked-list-node';

export class DoublyLinkedList<T> implements LinkedList<T> {
  private head: Nullable<LinkedListNode<T>>;

  private tail: Nullable<LinkedListNode<T>>;

  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getFirst(): Nullable<T> {
    return this.head?.value ?? null;
  }

  getLast(): Nullable<T> {
    return this.tail?.value ?? null;
  }

  addFirst(value: T): void {
    this.head = new LinkedListNode(value, null, this.head);
    this.tail = this.tail ?? this.head;
    this.length++;

    if (this.head.next) {
      this.head.next.prev = this.head;
    }
  }

  addLast(value: T): void {
    this.tail = new LinkedListNode(value, this.tail, null);
    this.head = this.head ?? this.tail;
    this.length++;

    if (this.tail.prev) {
      this.tail.prev.next = this.tail;
    }
  }

  removeFirst(): Nullable<T> {
    if (!this.head) {
      return null;
    }

    const first = this.head.value;
    this.head = this.head.next;
    this.tail = this.head ? this.tail : null;
    this.length--;

    if (this.head) {
      this.head.prev = null;
    }

    return first;
  }

  removeLast(): Nullable<T> {
    if (!this.tail) {
      return null;
    }

    const last = this.tail.value;
    this.tail = this.tail.prev;
    this.head = this.tail ? this.head : null;
    this.length--;

    if (this.tail) {
      this.tail.next = null;
    }

    return last;
  }

  size(): number {
    return this.length;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  toString(): string {
    return `[${[...this].join(',')}]`;
  }

  *[Symbol.iterator](): Generator<T> {
    for (let curr = this.head; curr; curr = curr.next) {
      yield curr.value;
    }
  }
}
