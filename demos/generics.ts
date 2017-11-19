class Stack<T> {
    data: T[];

    constructor() {
        this.data = [];
    }

    push(item: T) {
        this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.pop();
    }

    peek(): T | null {
        if(this.data.length)
            return this.data[this.data.length - 1];

        return null;
    }

    size() {
        return this.data.length;
    }
}

var stack = new Stack<string>();
stack.push(9);
stack.push('bb');

console.log(stack.peek());
stack.pop();
console.log(stack.peek());