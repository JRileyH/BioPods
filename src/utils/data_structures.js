export default {
    Stack: class Stack  {
        constructor() {
            this._ = new Array()
        }
        push(o) {
            this._.push(o)
        }
        pop() {
            return this._.pop();
        }
    }
}