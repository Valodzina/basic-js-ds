const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
    q = [];

    getUnderlyingList() {
        return this.q[0]

    }

    enqueue(value) {
        this.q.push({
            value: value,
            next: null,
        })
        if (this.q.length > 1) {
            this.q[this.q.length - 2].next = this.q[this.q.length - 1]
        }

    }

    dequeue() {
        if (this.q.length == 0)
            return null;
        else return this.q.shift().value;

    }
}

module.exports = {
    Queue
};