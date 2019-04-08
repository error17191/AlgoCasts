// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.stack = new Stack();
    }

    add(element) {
        let temp = new Stack();
        while (this.stack.peek()) {
            temp.push(this.stack.pop());
        }
        this.stack = new Stack();
        this.stack.push(element);
        while (temp.peek()) {
            this.stack.push(temp.pop())
        }
    }

    remove() {
        return this.stack.pop();
    }

    peek() {
        return this.stack.peek();
    }

    log() {
        this.stack.log();
    }
}

let q = new Queue();
q.add(1);
q.add(2);
q.add(3);
q.add(4);
console.log(q.remove())
console.log(q.remove())
console.log(q.remove())
console.log(q.remove())
module.exports = Queue;
