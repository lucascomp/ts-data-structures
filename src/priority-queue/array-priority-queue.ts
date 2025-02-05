import { Comparator } from '../common/comparator';
import { Nullable } from '../common/nullable';
import { PriorityQueue } from './priority-queue';

export class ArrayPriorityQueue<T> implements PriorityQueue<T> {
  private list: T[];

  constructor(private compareFn: Comparator<T>) {
    this.list = [];
  }

  peek(): Nullable<T> {
    return this.list[0] ?? null;
  }

  enqueue(value: T): void {
    const index = this.list.findIndex(
      (item) => this.compareFn(item, value) >= 0,
    );

    this.list.splice(index === -1 ? this.list.length : index, 0, value);
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

  *[Symbol.iterator](): Generator<T> {
    yield* this.list;
  }
}
