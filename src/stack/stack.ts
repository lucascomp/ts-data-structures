import { Nullable } from '../common/nullable';

export interface Stack<T> extends Iterable<T> {
  peek(): Nullable<T>;

  push(value: T): void;

  pop(): Nullable<T>;

  size(): number;

  isEmpty(): boolean;

  toString(): string;
}
