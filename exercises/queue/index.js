// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this.data = [];
    }

    add(element) {
        this.data.unshift(element);
    }

    remove(element) {
        this.data.pop();
    }
    log(){
        console.log(this.data);
    }
}

let q = new Queue();

q.add(1);
q.add(2);
q.add(3);
q.remove();
q.log();

module.exports = Queue;
