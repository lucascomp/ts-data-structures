import { Comparator } from "../common/comparator";
import { Nullable } from "../common/nullable";
import { PriorityQueue } from "./priority-queue";

export class ArrayPriorityQueue<T> implements PriorityQueue<T> {
  private list: Array<T>;

  constructor(private compareFn: Comparator<T>) {
    this.list = [];
  }

  peek(): Nullable<T> {
    return this.list.at(0) ?? null;
  }

  enqueue(value: T): void {
    let index = 0;

    while (
      index < this.list.length &&
      this.compareFn(this.list.at(index)!, value) < 0
    ) {
      index++;
    }

    this.list.splice(index, 0, value);
  }

  dequeue(): Nullable<T> {
    return this.list.shift() ?? null;
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
