import { Nullable } from "../common/nullable";

class LinkedListNode<T> {
  value: T;
  next: Nullable<LinkedListNode<T>>;

  constructor(value: T, next: Nullable<LinkedListNode<T>> = null) {
    this.value = value;
    this.next = next;
  }
}

type LinkedListNodeComparator<T> = (a: T, b: T) => boolean;

export class LinkedList<T> implements Iterable<T> {
  private _head: Nullable<LinkedListNode<T>>;

  private _tail: Nullable<LinkedListNode<T>>;

  private _length: number;

  private compareFn: LinkedListNodeComparator<T>;

  constructor(compareFn: LinkedListNodeComparator<T> = (a, b) => a === b) {
    this._head = null;
    this._tail = null;
    this._length = 0;
    this.compareFn = compareFn;
  }

  get head(): Nullable<LinkedListNode<T>> {
    return this._head;
  }

  get tail(): Nullable<LinkedListNode<T>> {
    return this._tail;
  }

  get length(): number {
    return this._length;
  }

  prepend(value: T) {
    this._head = new LinkedListNode(value, this.head);
    this._tail = this.tail ?? this.head;
    this._length++;
  }

  append(value: T) {
    if (!this.tail) {
      return this.prepend(value);
    }

    this.tail.next = new LinkedListNode(value, null);
    this._tail = this.tail.next;
    this._length++;
  }

  delete(value: T) {
    if (this.head && this.compareFn(this.head.value, value)) {
      this._head = this.head.next;
      this._tail = this.head ? this._tail : null;
      this._length--;
      return;
    }

    let curr = this.head;

    while (curr?.next && !this.compareFn(curr.next.value, value)) {
      curr = curr.next;
    }

    if (curr?.next) {
      if (this.tail && this.compareFn(curr.next.value, this.tail?.value)) {
        this._tail = curr;
      }

      curr.next = curr.next.next;
      this._length--;
    }
  }

  isEmpty() {
    return this.length === 0;
  }

  print() {
    return `[${[...this].join(",")}]`;
  }

  *[Symbol.iterator](): Generator<T> {
    let curr = this.head;

    while (curr) {
      yield curr.value;
      curr = curr.next;
    }
  }
}
