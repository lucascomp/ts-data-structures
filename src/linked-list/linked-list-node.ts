import { Nullable } from "../common/nullable";

export class LinkedListNode<T> {
  value: T;
  prev: Nullable<LinkedListNode<T>>;
  next: Nullable<LinkedListNode<T>>;

  constructor(
    value: T,
    prev: Nullable<LinkedListNode<T>> = null,
    next: Nullable<LinkedListNode<T>> = null
  ) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}
