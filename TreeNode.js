//------------------------------------------------------------
//TreeNode.js
//NAME: Omojola Oluwaseun
//STUDENT NUMBER: 7880480
//this class creates a new tree node
//------------------------------------------------------------
"use strict";
class TreeNode{
    constructor(data,weight, left, right){
        this.data = data;
        this.weight = weight;
        this.left = left;
        this.right = right;
    }
    getData(){
        return this.data;
    }
    getWeight(){
        return this.weight;
    }
    getLeft(){
        return this.left;
    }

    getRight(){
        return this.right;
    }
}
module.exports = TreeNode;