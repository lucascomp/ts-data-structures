import { Nullable } from "../common/nullable";

export interface Stack<T> extends Iterable<T> {
  push(value: T): void;

  pop(): Nullable<T>;

  peek(): Nullable<T>;

  size(): number;

  isEmpty(): boolean;

  print(): string;
}
