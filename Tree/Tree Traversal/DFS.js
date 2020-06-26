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

    PreOrder(){
        let visitedStack = [],
            current = this.root;
        let helper = (node) => {
            visitedStack.push(node.value);
            if(node.left) helper(node.left);
            if(node.right) helper(node.right);
        }
        helper(current);
        return visitedStack;
    }

    PostOrder(){
        let visitedStack = [],
            current = this.root;
        let helper = (node) => {
            if(node.left) helper(node.left);
            if(node.right) helper(node.right);
            visitedStack.push(node.value);
        }
        helper(current);
        return visitedStack;
    }

    InOrder(){
        let visitedStack = [],
            current = this.root;
        let helper = (node) => {
            if(node.left) helper(node.left);
            visitedStack.push(node.value);
            if(node.right) helper(node.right);
        }
        helper(current);
        return visitedStack;
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
console.log(bst.PreOrder());
console.log(bst.InOrder());
console.log(bst.PostOrder());