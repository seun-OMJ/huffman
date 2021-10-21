//------------------------------------------------------------
//LinkedList.js
//NAME: Omojola Oluwaseun
//STUDENT NUMBER: 7880480
//this class creates a linked list object
//------------------------------------------------------------
"use strict";
let node = require('./node.js'); // use Node in this file.

class LinkedList {

    constructor() {
        this.head = null;
    }
    //----------------------------------------------------------
    //PURPOSE:adds a key value pair to the linked list
    //INPUT PARAMETER:
    //key: is the hash value associated with the value
    //value:the value to be stored in the linked list
    //OUTPUT PARAMETER:
    //returns the hash value
    //---------------------------------------------------------
    insert(key, value){
        this.head = new node (key, value,this.head );


    }
    //----------------------------------------------------------
    //PURPOSE:searches for a key and returns the node the key was found
    //INPUT PARAMETER:
    //k: the key to search for
    //OUTPUT PARAMETER:
    //result: the node which the key was found
    //---------------------------------------------------------
    findKey(k){
        let result = null;
        let curr = this.head;

        while(curr!= null && curr.getKey()!=k){
            curr = curr.getNext();
        }
        if(curr==null){
            result = null
        }
        else if(curr.getKey() === k){
            result = curr;
        }
        return result;
    }

}

module.exports = LinkedList;
