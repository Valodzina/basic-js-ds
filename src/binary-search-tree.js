const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
    constructor(data) {
        this.data = data; // node value
        this.left = null; // left node child reference
        this.right = null; // right node child reference
    }
}

class BinarySearchTree {
    constructor() {
        this.rootN = null; // корень bst
    }

    root() {
        return this.rootN;
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    add(data) {
        let newNode = new Node(data);
        if (this.rootN == null) {
            this.rootN = newNode;
            return;
        }

        this.insertNode(this.rootN, newNode)

    }



    insertNode(node, newNode) {
        if (newNode.data == node.data) {
            return
        }
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }





    has(data) {

        if (this.rootN == null) {
            // this.rootN = newNode;
            return false;
        }
        return this.hasd(this.rootN, data)
            // remove line with error and write your code here
    }



    hasd(Node, data) {
        if (Node.data == data) {
            return true
        }
        if (Node.data > data) {
            if (Node.left !== null) {
                return this.hasd(Node.left, data)
            } else {
                return false
            }

        }
        if (Node.data < data) {
            if (Node.right !== null) {
                return this.hasd(Node.right, data)
            } else {
                return false
            }

        }



        return false;
    }

    find(data) {
        if (this.rootN == null) {
            // this.rootN = newNode;
            return null;
        }
        return this.findN(this.rootN, data);
    }

    findN(Node, data) {
        if (Node.data == data) {
            return Node
        }
        if (Node.data > data) {
            if (Node.left !== null) {
                return this.findN(Node.left, data)
            } else {
                return null
            }

        }
        if (Node.data < data) {
            if (Node.right !== null) {
                return this.findN(Node.right, data)
            } else {
                return null
            }

        }
        return null;
    }




    remove(data) {

        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    min() {

        if (this.rootN == null) {
            return null;
        }
        return this.minN(this.rootN)

    }
    minN(Node) {

        if (Node.left == null) {

            return Node.data;
        }
        return this.minN(Node.left)

    }


    max() {

        if (this.rootN == null) {
            return null;
        }
        return this.maxN(this.rootN)

    }

    maxN(Node) {

        if (Node.right == null) {

            return Node.data;
        }
        return this.maxN(Node.right)

    }
}

module.exports = {
    BinarySearchTree
};