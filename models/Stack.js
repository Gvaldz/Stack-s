import { Node } from './Node.js';

export class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        let newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        let value = this.top.value;
        this.top = this.top.next;
        return value;
    }

    isEmpty() {
        return this.top === null;
    }
}