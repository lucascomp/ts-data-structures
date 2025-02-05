import { Nullable } from "../common/nullable";

export interface Queue<T> extends Iterable<T> {
  enqueue(value: T): void;

  dequeue(): Nullable<T>;

  peek(): Nullable<T>;

  size(): number;

  isEmpty(): boolean;

  toString(): string;
}
