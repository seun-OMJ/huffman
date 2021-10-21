//------------------------------------------------------------
//Dictionary.js
//NAME: Omojola Oluwaseun
//STUDENT NUMBER: 7880480
//this class creates an hashtable and all the methods to implement an hashtable
//------------------------------------------------------------
let LinkedList = require("./LinkedList");

class Dictionary{
    constructor(arrSize){
        this.arr = new Array(arrSize);
        for(let i =0;i<this.arr.length;i++){
            this.arr[i] = new LinkedList();
        }
        this.size = 0;

    }


    put(k,v){
        if(this.arr[k%this.arr.length].findKey(k)==null){
            this.arr[k%this.arr.length].insert(k,v);
            this.size++;
        }
        else if(this.arr[k%this.arr.length].findKey(k)!=null){
            this.arr[k%this.arr.length].findKey(k).setValue(v);
        }
    }


    get(k){
        let result = -1;
        if(this.arr[k%this.arr.length].findKey(k)!=null){
            result = this.arr[k%this.arr.length].findKey(k).getValue();
            }
        return result;
    }


    contains(k){
        let result = false;
        if (this.arr[k%this.arr.length].findKey(k)!=null){
            result = true;
        }
        return result;
    }


    isEmpty(){
        let result = false;
        if(this.size==0){
            result = true;}
        return result;
    }
}
module.exports = Dictionary