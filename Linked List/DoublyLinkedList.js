class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
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
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        let current = this.tail;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.tail = this.tail.prev;
            this.tail.next = null;
            current.prev = null;
        }          
        this.length--;
        return current;
    }

    shift(){
        if(!this.head)   return undefined;
        let current = this.head;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.head = this.head.next;
            this.head.prev = null;
            current.next = null;
        }
        this.length--;
        return current;
    }

    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    
    get(index){
        if (index < 0 || index >= this.length ) return undefined;
        let count ;
        let current ;
        if(index >= this.length/2){
            count = 0
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        }
        else{
            count =  (this.length-1) ;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    set(val,index){
        let node = this.get(index);
        if(node){
            node.val = val;
            return true;
        }
        return false;
    }

    insert(val, index){
        if(index < 0 || index > this.length ) return false;
        if(index == 0) return !!this.unshift(val);
        if(index == this.length) return !!this.push(val);
        let newNode = new Node(val);
        let nextNode = this.get(index);
        let prevNode = nextNode.prev ;
        newNode.next = nextNode;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        nextNode.prev = newNode;
        this.length++;
        return true;

    }
    traverse(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current  = current.next;
        }        
    }
}

let DLL = new DoublyLinkedList()
DLL.push("Harry");
DLL.push("Ron");
DLL.push("Hermione");
DLL.traverse();
DLL.insert(",",1);
console.log(DLL.insert(",",3));
DLL.traverse();