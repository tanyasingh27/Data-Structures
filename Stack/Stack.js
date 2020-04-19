/* Using Array Implementation, we can simply use Push and Pop for Stack Operation*/


/********************* LINKED LIST IMPLEMENTATION **********************/
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.first){
            this.last = newNode;
        }
        newNode.next = this.first ;
        this.first = newNode;
        return ++this.size;
    }

    pop(){
        if(this.first == null) return null;
        let removedNode = this.first;
        if(this.first == this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return removedNode;        
    }
}

let stack = new Stack();
console.log(stack.push("FIRST"));
console.log(stack.push("SECOND"));
console.log(stack.push("THIRD"));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());



