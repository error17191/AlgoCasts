// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let node = this.head;
        let count = 0;
        while (node) {
            node = node.next;
            count++;
        }

        return count;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null;
        }
        let node = this.head;
        while (node.next) {
            node = node.next;
        }

        return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next) {
            this.head = null;
            return;
        }

        let prevNode = this.head;
        let node = this.head;
        while (node.next) {
            prevNode = node;
            node = node.next;
        }

        prevNode.next = null;

    }

    insertLast(data) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }
        let node = this.head;
        while (node.next) {
            node = node.next;
        }

        node.next = new Node(data);
    }

    getAt(index) {
        if (!this.head) {
            return null;
        }
        let i = 0;
        let node = this.head;

        while (i < index && node) {
            node = node.next;
            i++;
        }

        return node;
    }

    removeAt(index) {
        if (!this.head) {
            return;
        }
        if (index == 0) {
            this.head = this.head.next;
            return;
        }
        let prev = this.getAt(index - 1);
        if (!prev || !prev.next) {
            return;
        }

        prev.next = prev.next.next;
    }

    // removeAt(index) {
    //     if (!this.head) {
    //         return;
    //     }
    //     if (index == 0) {
    //         this.head = this.head.next;
    //         return;
    //     }
    //     let i = 0;
    //     let node = this.head;
    //     let prevNode = this.head;
    //
    //     while (node) {
    //         if (i == index - 1) {
    //             node.next = node.next ? node.next.next : null;
    //         }
    //         node = node.next;
    //         i++;
    //     }
    //
    // }

    insertAt(data, index) {
        if(index == 0){
            this.head = new Node(data, this.head);
            return;
        }
        let before = this.getAt(index - 1);
        if(! before){
            this.insertLast(data);
            return;
        }
        let node = new Node(data, before.next);
        before.next = node;
    }
}

module.exports = {Node, LinkedList};
