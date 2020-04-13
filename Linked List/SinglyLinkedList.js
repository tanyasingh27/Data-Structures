class Node{
    constructor(val){
        this.val = val ;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    traverse(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current  = current.next;
        }        
    }

    pop(){
        if(!this.head){
            return undefined;
        }
        let prev; 
        let current = this.head; 
        while(current.next){
            prev = current;
            current  = current.next;
        }
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        else{
            this.tail = prev;
            prev.next = null;
        }
        return current;
    }

    shift(){
        if(!this.head){
            return undefined;
        }
        let temp = this.head;
        this.head = temp.next;
        temp.next = null;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return temp;
    }

    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        let current = this.head;
        let i = 0 ;
        while(i < index){
            current = current.next;
            i++;
        }
        return current;

    }
    
    set(val, index){
        let tempNode = this.get(index);
        if(tempNode){            
            tempNode.val = val;
            return true;
        }
        return false;
    }

    insert(val,index){
        if(index< 0 ||index > this.length) return false;
        if(index == this.length) return (this.push(val)) ? true : false;
        if(index === 0) return !!this.unshift(val);
        let prevNode = this.get(index-1);
        let nextNode = prevNode.next;
        let newNode = new Node(val);
        newNode.next = nextNode;
        prevNode.next = newNode;
        this.length++;
        return true;
    }

    remove(index){
        if(index< 0 ||index >= this.length) return undefined;
        if(index == this.length-1) return this.pop();
        if(index === 0) return this.shift();
        let prevNode = this.get(index-1);
        let current = prevNode.next;
        prevNode.next = current.next;
        current.next = null;
        this.length--; 
        return current;
    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next ; 
        let prev = null;
        for( let i=0; i< this.length; i++){
            next = node.next;
            node.next = prev;
            prev =  node;
            node = next;
        }
        return this;
    }
}

let SS = new SinglyLinkedList();
SS.push("How");
SS.push("You");
SS.push("doin");
SS.push("?");
//console.log(SS);
//console.log(SS.pop());
//console.log(SS.shift());
//SS.traverse();
//console.log(SS);
// console.log(SS.get(2));
// console.log(SS.set("doing",2));
// SS.traverse();
// console.log(SS.insert("Hey",0));
// console.log(SS.insert(",",1));
// SS.traverse();
// console.log(SS.remove(1));
console.log(SS.reverse());
SS.traverse();
