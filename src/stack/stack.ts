export class Stack<T> {
  private stack: Array<T>;

  constructor() {
    this.stack = [];
  }

  push(value: T) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.stack[this.size() - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.stack.length;
  }

  print() {
    return `[${this.stack.join(",")}]`;
  }
}
