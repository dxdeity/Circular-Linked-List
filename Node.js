class Node {
    constructor(val, next) {
        if (val === null && next === null) {
            this.val = null;
            this.next = null;
        } else if (next === null) {
            this.val = val;
        } else {
            this.val = val;
            this.next = next;
        }
    }
    addNode() {
        this.next = node;
    }

    setNext(next) {
        this.next = next;
    }

    setVal(val) {
        this.val = val;
    }
    getNext() {
        return this.next;
    }
    getVal() {
        return this.val;
    }
    hasNext() {
        if (this.next == null) {
            return false;
        }
        return true;
    }
    toString() {
        return "Value: " + this.val;
    }
}
export {
    Node
};