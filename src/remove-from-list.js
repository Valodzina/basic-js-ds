const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */



function removeKFromList(l, k) {
    throw new NotImplementedError('Not implemented');
    // class ListNode {
    //     constructor(x) {
    //         this.value = x;
    //         this.next = null;
    //     }
    // }

    // let curr = l;
    // let next = curr.next;
    // while (curr != null) {

    //     while (curr.value) {

    //     }
    //     curr = curr.next;
    //     next = curr.next;
    // }


    return l;

    // let j = 0;
    // while (l[j] == k) {
    //     j++
    // }
    // let ans = new ListNode(l[j]);

    // let curr = ans;

    // for (let i = j + 1; i < l.length; i++) {
    //     if (l[i] == k) {} else {
    //         curr.next = new ListNode(l[i])
    //         curr = curr.next
    //     }

    // }
    // return ans;
    //return l;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
}
// function removeKFromList(l, k) { 

// }

module.exports = {
    removeKFromList
};