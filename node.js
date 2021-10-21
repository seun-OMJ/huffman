//------------------------------------------------------------
//node.js
//NAME: Omojola Oluwaseun
//STUDENT NUMBER: 7880480
//this class is a node for a linked list
//------------------------------------------------------------
'use strict';
class node{
    constructor(key,value,next) {
        if (arguments.length === 1) {
            this.key = key;
            this.value = value;
            this.next = null;
        } else if (arguments.length >= 2) {
            this.key = key;
            this.value = value;
            this.next = next;
        } else {
            this.key = -1;
            this.value = -1;
            this.next = null;
        }
    }
    getKey() {
        return this.key;
    }
    getValue(){
        return this.value;
    }

    getNext() {
        return this.next;
    }
    setValue(val){
        this.value = val;
    }
}

module.exports = node;
