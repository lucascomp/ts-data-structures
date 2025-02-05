import { Nullable } from '../common/nullable';

export interface Queue<T> extends Iterable<T> {
  peek(): Nullable<T>;

  enqueue(value: T): void;

  dequeue(): Nullable<T>;

  size(): number;

  isEmpty(): boolean;
}
