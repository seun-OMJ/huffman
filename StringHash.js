//------------------------------------------------------------
//intHash.js
//NAME: Omojola Oluwaseun
//STUDENT NUMBER: 7880480
//this class creates a hashable object
//------------------------------------------------------------
"use strict";
let Hashable = require('./Hashable.js');

    class StringHash extends Hashable{
        constructor(val) {
            super();
            this.value = val
        }

        //----------------------------------------------------------
        //PURPOSE:compares a value with with this. value and returns a boolean
        //INPUT PARAMETER:
        //x: is the value to be compared to this.value
        //OUTPUT PARAMETER:
        //result: returns true if x is equal this.value and false otherwise
        //---------------------------------------------------------
        equals(x){
            let result = true;
            if (x.length==this.value.length){
                for(let i = 0;i<this.value.length;i++){
                    if(x.charCodeAt(i)!=this.value.charCodeAt(i)){
                        result = false;
                        i = this.value.length;
                    }
                }
            }
            else if(x.length!=this.value.length){
                result = false;
            }
            return result;
        }


        //----------------------------------------------------------
        //PURPOSE:returns an hash value based on this.value and the hash function
        //INPUT PARAMETER:
        //no input value
        //OUTPUT PARAMETER:
        //result: returns the hash value
        //---------------------------------------------------------
        hashVal(){
            let result =0;
            let prime  = 3;
            for(let i = 0;i<this.value.length;i++){
                result = this.value.charCodeAt(i)*Math.pow(prime,this.value.length-i-1);
            }
            return result;
        }

}
module.exports = StringHash;