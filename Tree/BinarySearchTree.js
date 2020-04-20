/******************** Binary Search Tree **********************/
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
}

/************** Test *****************/
let bst = new BinarySearchTree();
bst.insert(41);
bst.insert(62)
bst.insert(32);
bst.insert(22);
bst.insert(38);
bst.insert(37);
console.log(bst.find(22));
console.log(bst.find(52));