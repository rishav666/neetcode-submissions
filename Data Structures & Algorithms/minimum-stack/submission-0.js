class MinStack {
    constructor() {
        this.stack=new Array();
        this.min= [Infinity];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.min.push(Math.min(this.min[this.min.length-1],val))
        this.stack.push(val)
        // console.log(this.min,this.stack)
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.min.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min[this.min.length-1]
    }
}
