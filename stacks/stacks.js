//code out stack 

class Node {
    constructor(data){
        this.data = data
        this.next = null 
    }
}

class Stack {
    constructor() {
       this.top = null
       this.bottom = null
       this.length = 0 
    }
    // Remove and return the string on the top of the stack
    pop(){
        if (this.length === 1) {
            let top = this.top
            this.top = null
            this.bottom = null
            this.length--
            return top 
        } else {
           let top = this.top
           this.top = this.top.next
           this.length--
           return top 
        }
    }
    //Add a string to the top of the stack
    push(data){
        const node = new Node(data)
        if (!this.top) {
            this.top = node
            this.bottom = node
        } else {
            let temp = this.top
            this.top = node 
            this.top.next = temp
        }
        this.length++;
        return this;
    }
    //Return the number of items on the stack
    size(){
        if(this.top){
            return this.top
        } else {
            return "No top";
        }
    }
}
const stack = new Stack();
stack.push('First string node');
stack.pop();
console.log(stack.size());