import { Nullable } from '../common/nullable';

export class LinkedListNode<T> {
  constructor(
    public value: T,
    public prev: Nullable<LinkedListNode<T>> = null,
    public next: Nullable<LinkedListNode<T>> = null,
  ) {}
}
