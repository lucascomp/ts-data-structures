export class Stack<T> {
  private stack: Array<T>;

  constructor() {
    this.stack = [];
  }

  get length() {
    return this.stack.length;
  }

  push(value: T) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    if (!this.isEmpty()) {
      return this.stack[this.length - 1];
    }
  }

  isEmpty() {
    return this.length === 0;
  }

  print() {
    return `[${this.stack.join(",")}]`;
  }

  *[Symbol.iterator](): Generator<T> {
    for (let i = 0; i < this.stack.length; i++) {
      yield this.stack[i];
    }
  }
}
