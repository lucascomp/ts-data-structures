export class Queue<T> {
  private queue: Array<T>;
  private startIndex: number;

  constructor() {
    this.queue = [];
    this.startIndex = 0;
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
    if (this.isEmpty()) {
      return undefined;
    }

    return this.queue[this.startIndex];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.queue.length - this.startIndex;
  }

  print() {
    return `[${this.queue.slice(this.startIndex).join(",")}]`;
  }
}
