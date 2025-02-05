import { Nullable } from '../common/nullable';
import { LinkedList } from './linked-list';
import { LinkedListNode } from './linked-list-node';

export class SinglyLinkedList<T> implements LinkedList<T> {
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
  }

  addLast(value: T): void {
    if (!this.tail) {
      return this.addFirst(value);
    }

    this.tail.next = new LinkedListNode(value, null);
    this.tail = this.tail.next;
    this.length++;
  }

  removeFirst(): Nullable<T> {
    if (!this.head) {
      return null;
    }

    const first = this.head.value;
    this.head = this.head.next;
    this.tail = this.head ? this.tail : null;
    this.length--;

    return first;
  }

  removeLast(): Nullable<T> {
    if (!this.head) {
      return null;
    }

    if (this.head.next === null) {
      return this.removeFirst();
    }

    let prev = this.head;
    let curr = this.head.next;

    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }

    const last = curr.value;
    prev.next = null;
    this.tail = prev;
    this.length--;

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
