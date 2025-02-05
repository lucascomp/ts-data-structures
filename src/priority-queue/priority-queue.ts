import { Nullable } from '../common/nullable';

export interface PriorityQueue<T> extends Iterable<T> {
  peek(): Nullable<T>;

  enqueue(value: T): void;

  dequeue(): Nullable<T>;

  size(): number;

  isEmpty(): boolean;
}
