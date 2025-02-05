import { Nullable } from '../common/nullable';

export interface Deque<T> extends Iterable<T> {
  peekFirst(): Nullable<T>;

  peekLast(): Nullable<T>;

  addFirst(value: T): void;

  addLast(value: T): void;

  removeFirst(): Nullable<T>;

  removeLast(): Nullable<T>;

  size(): number;

  isEmpty(): boolean;
}
