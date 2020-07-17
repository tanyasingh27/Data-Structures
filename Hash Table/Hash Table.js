class HashTable {
    constructor(size=53){
        this.keysMap = new Array(size);
    }

    //hash function 
    _hash(key){
        let total = 0;
        let randomPrime = 31;
        for(let i=0; i< Math.min(key.length, 100); i++){
            let char = key[i];
            let val = char.charCodeAt(0) -96;
            total = (total * randomPrime + val) % this.keysMap.length;
        }
        return total;
    }

    // set (key, value) pairs
    set(key, value){
        let idx  = this._hash(key);
        if(!this.keysMap[idx]){
            this.keysMap[idx] = [];
        }
        this.keysMap[idx].push([key,value]);
    }

    // get value by key
    get(key){
        let idx = this._hash(key);
        if(this.keysMap[idx]){
            for(let i=0; i<this.keysMap[idx].length; i++){
                if(this.keysMap[idx][i][0] === key){
                    return this.keysMap[idx][i][1];
                }
            }
        }
        return undefined;
    }

    //get all the keys from Hash Table
    keys(){
        let keysArr = [];
        for(let i=0; i< this.keysMap.length; i++){
            if(this.keysMap[i]){
                for(let j=0; j< this.keysMap[i].length; j++){
                    if(!keysArr.includes(this.keysMap[i][j][0])){
                        keysArr.push(this.keysMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }

    //get all the values from Hash Table
    values(){
        let valuesArr = [];
        for(let i=0; i< this.keysMap.length; i++){
            if(this.keysMap[i]){
                for(let j=0; j< this.keysMap[i].length; j++){
                    if(!valuesArr.includes(this.keysMap[i][j][1])){
                        valuesArr.push(this.keysMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }

}

let HT = new HashTable(17);
HT.set("indianred","#CD5C5C");
HT.set("lightcoral","#F08080");
HT.set("salmon","#FA8072");
HT.set("yellow","#FFFF00");
HT.set("tomato","#FF6347");
HT.set("olive","#808000");
HT.set("cyan","#20B2AA");
console.log(HT);
HT.set("pink","#FFC0CB");