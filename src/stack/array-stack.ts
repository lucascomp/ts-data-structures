import { Nullable } from "../common/nullable";
import { Stack } from "./stack";

export class ArrayStack<T> implements Stack<T> {
  private list: Array<T>;

  constructor() {
    this.list = [];
  }

  peek(): Nullable<T> {
    return this.list.at(-1) ?? null;
  }

  push(value: T): void {
    this.list.push(value);
  }

  pop(): Nullable<T> {
    return this.list.pop() ?? null;
  }

  size(): number {
    return this.list.length;
  }

  isEmpty(): boolean {
    return this.list.length === 0;
  }

  toString(): string {
    return `[${this.list.join(",")}]`;
  }

  *[Symbol.iterator](): Generator<T> {
    yield* this.list;
  }
}
