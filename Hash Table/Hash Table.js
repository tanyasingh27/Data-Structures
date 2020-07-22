class HashTable {
    constructor(size=53){
        this.keysMap = new Array(size);
    }

    //hash function 
    _hash(key){
        let total = 0;
        let randomPrime = 31;
        for(let i=0; i< Math.min(this.keysMap.length, 100); i++){
            let val = char.charCodeAt(0) -96;
            total = (total * randomPrime + val % this.keysMap.length);
        }
        return total;
    }

    set(key, value){
        let idx  = this._hash(key);
        if(!this.keysMap[idx]){
            this.keysMap[idx] = [];
        }
        this.keysMap[idx].push([key,value]);
    }

}