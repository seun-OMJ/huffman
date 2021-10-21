//------------------------------------------------------------
//intHash.js
//NAME: Omojola Oluwaseun
//STUDENT NUMBER: 7880480
//this class creates a hashable object
//------------------------------------------------------------
"use strict";
let Hashable = require('./Hashable.js');

class intHash extends Hashable{
    constructor(val) {
        super();
        this.value = val;
    }

    //----------------------------------------------------------
    //PURPOSE:compares a value with with this. value and returns a boolean
    //INPUT PARAMETER:
    //x: is the value to be compared to this.value
    //OUTPUT PARAMETER:
    //result: returns true if x is equal this.value and false otherwise
    //---------------------------------------------------------
    equal(x){
        let result = false;
        if(this.value==x){
            result = true;
        }
        return result
    }
    //----------------------------------------------------------
    //PURPOSE:returns an hash value based on this.value and the hash function
    //INPUT PARAMETER:
    //no input value
    //OUTPUT PARAMETER:
    //returns the hash value
    //---------------------------------------------------------
    hashVal(){
        return this.value;
    }
}
module.exports = intHash;