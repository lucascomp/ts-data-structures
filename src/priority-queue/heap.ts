import { Comparator } from '../common/comparator';
import { Nullable } from '../common/nullable';
import { PriorityQueue } from './priority-queue';

export class Heap<T> implements PriorityQueue<T> {
  private list: T[];

  constructor(private compareFn: Comparator<T>) {
    this.list = [];
  }

  peek(): Nullable<T> {
    return this.list[0] ?? null;
  }

  enqueue(value: T): void {
    this.list.push(value);
    let curr = this.list.length - 1;

    while (curr > 0) {
      const parent = Math.floor((curr - 1) / 2);

      if (this.compareFn(this.list[curr], this.list[parent]) >= 0) {
        break;
      }

      [this.list[curr], this.list[parent]] = [
        this.list[parent],
        this.list[curr],
      ];
      curr = parent;
    }
  }

  dequeue(): Nullable<T> {
    if (this.list.length < 2) {
      return this.list.pop() ?? null;
    }

    const dequeued = this.list[0];
    this.list[0] = this.list.pop()!;
    let curr = 0;

    while (true) {
      const left = 2 * curr + 1;
      const right = 2 * curr + 2;
      let min = curr;

      if (
        left < this.list.length &&
        this.compareFn(this.list[left], this.list[min]) < 0
      ) {
        min = left;
      }

      if (
        right < this.list.length &&
        this.compareFn(this.list[right], this.list[min]) < 0
      ) {
        min = right;
      }

      if (min === curr) {
        break;
      }

      [this.list[curr], this.list[min]] = [this.list[min], this.list[curr]];
      curr = min;
    }

    return dequeued;
  }

  size(): number {
    return this.list.length;
  }

  isEmpty(): boolean {
    return this.list.length === 0;
  }

  *[Symbol.iterator](): Generator<T> {
    const clone = new Heap(this.compareFn);
    clone.list = [...this.list];

    while (!clone.isEmpty()) {
      yield clone.dequeue()!;
    }
  }
}
