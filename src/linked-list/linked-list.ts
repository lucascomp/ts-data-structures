import { Nullable } from "../common/nullable";

export interface LinkedList<T> extends Iterable<T> {
  getFirst(): Nullable<T>;

  getLast(): Nullable<T>;

  addFirst(value: T): void;

  addLast(value: T): void;

  removeFirst(): Nullable<T>;

  removeLast(): Nullable<T>;

  size(): number;

  isEmpty(): boolean;

  print(): string;
}
