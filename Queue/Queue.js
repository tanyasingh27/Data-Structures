/* Using Array Implementation, we can simply use (Push and Shift) or (Unshift and Pop) for Queue Operations*/


/********************* LINKED LIST IMPLEMENTATION **********************/
class Node {
    constructor(value){
        this.value = value;
        this.next = null;    
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    Enqueue(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
        }
        else{
            this.last.next = newNode; 
        }
        this.last = newNode;
        return ++this.size;
       
    }

    Dequeue(){
        if(!this.first) return null;
        let removedNode =  this.first;
        if(this.size == 1){
            this.last = null;
        }
        this.first = this.first.next;
        removedNode.next = null;
        this.size--;
        return removedNode;
    }
}

/************ Test ***********/
let queue = new Queue;
console.log(queue.Enqueue("First"));
console.log(queue.Enqueue("Second"));
console.log(queue.Enqueue("Third"));
console.log(queue);
console.log(queue.Dequeue());
console.log(queue.Dequeue());
console.log(queue.Dequeue());
console.log(queue.Dequeue());
