//------------------------------------------------------------
//Hashable.js
//NAME: Omojola Oluwaseun
//STUDENT NUMBER: 7880480
//this acts as an abstract super class for int and string hash
//------------------------------------------------------------
'use strict';
class Hashable{
    constructor() {
        if(this.constructor===Hashable){
            throw new Error("CANNOT CREATE TYPE OF ABSTRACT CLASS");
        }
    }


    //----------------------------------------------------------
    //PURPOSE:compares a value with with this. value and returns a boolean
    //INPUT PARAMETER:
    //x: is the value to be compared to this.value
    //OUTPUT PARAMETER:
    //result: returns true if x is equal this.value and false otherwise
    //---------------------------------------------------------
    equals(x){
        throw new Error("missing equals(x) method");
        return null;
    }


    //----------------------------------------------------------
    //PURPOSE:returns an hash value based on this.value and the hash function
    //INPUT PARAMETER:
    //no input value
    //OUTPUT PARAMETER:
    //returns the hash value
    //---------------------------------------------------------
    hashVal(){
        throw new Error("missing hashVal() method");
        return null;
    }



}
module.exports = Hashable;