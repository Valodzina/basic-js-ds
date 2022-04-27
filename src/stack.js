const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
    s = []
    push(element) {
        this.s.unshift(element);
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    pop() {
        return this.s.shift();
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    peek() {
        let k = this.s.shift();
        this.s.unshift(k);
        return k;
        // throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }
}

module.exports = {
    Stack
};