// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    constructor() {
        this.data = [];
    }

    push(element) {
        this.data.push(element);
    }

    pop() {
        this.data.pop();
    }

    log(){
        console.log(this.data);
    }
}

let s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.pop();

s.log();


module.exports = Stack;
