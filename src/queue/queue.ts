export class Queue<T> {
  private queue: Array<T>;
  private startIndex: number;

  constructor() {
    this.queue = [];
    this.startIndex = 0;
  }

  get length() {
    return this.queue.length - this.startIndex;
  }

  enqueue(value: T) {
    this.queue.push(value);
  }

  dequeue() {
    const dequeued = this.queue[this.startIndex];
    this.startIndex++;

    return dequeued;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.queue[this.startIndex];
    }
  }

  isEmpty() {
    return this.length === 0;
  }

  print() {
    return `[${this.queue.slice(this.startIndex).join(",")}]`;
  }

  *[Symbol.iterator](): Generator<T> {
    for (let i = 0; i < this.queue.length; i++) {
      yield this.queue[i];
    }
  }
}
