/*************************BFS ( Breadth First Search ) ****************************/
class Node{   
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(val){
        let newNode = new Node(val);
        let current = this.root;
        while(current){
            if(val < current.value){
                if(!current.left) {
                    current.left = newNode;
                    return this;
                }
                current= current.left;
            }
            else if(val > current.value){
                if(!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
            else{
                return undefined;
            }
        }
        this.root = newNode;
        return this;
               
    }

    find(val){
        let current = this.root;
        while(current){
            if(val == current.value){
                return true;
            }
            if(val < current.value){
                current= current.left;
            }
            else if(val > current.value){
                current = current.right;
            }
        }
        return false;               
    }

    BFS(){
        let queue = [],
            data = [],
            node = this.root;
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }    
        return data;
    }

    ReverseBFS(){
        let queue = [],
            data = [];
        queue.push(this.root);
        while(queue.length){
            let node = queue.shift();
            data.unshift(node.value);
            if(node.right) queue.push(node.right);
            if(node.left) queue.push(node.left);            
        }    
        return data;
    }
}

/************** Test *****************/
let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6)
bst.insert(11);
bst.insert(5);
bst.insert(8);
bst.insert(15);
console.log(bst.BFS());
console.log(bst.ReverseBFS());