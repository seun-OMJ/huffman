//------------------------------------------------------------
//HuffTree.js
//NAME: Omojola Oluwaseun
//STUDENT NUMBER: 7880480
//this class creates a huffman tree
//------------------------------------------------------------
"use strict";
let TreeNode = require('./TreeNode.js');
class HuffTree{
    constructor(data,weight) {
        this.root = new TreeNode(data,weight,null,null);
    }
    //----------------------------------------------------------
    //PURPOSE:combines 2 trees to become one bigger tree
    //INPUT PARAMETER:
    //rootData: to represent the root value of the new tree
    //sub1: one of the 2 subtrees of the new tree
    //sub2: one of the subtrees of the new tree
    //OUTPUT PARAMETER:
    //result: returns a new huffman tree with sub1 and sub2 as subtrees
    //---------------------------------------------------------
    combineTrees(rootData,sub1,sub2){
        let l;
        let r;
        if(sub1.compareTo(sub2)===1){
            l= sub2;
            r = sub1;
        }
        else if(sub1.compareTo(sub2)===-1){
            l = sub1;
            r = sub2;
        }

        let a = new TreeNode(rootData,sub1.getData().getWeight()+sub2.getData().getWeight(), l.getData(), r.getData());
        let result = new HuffTree(rootData,sub1.getData().getWeight()+sub2.getData().getWeight())
        result.root = a;
        return result;
    }


    //----------------------------------------------------------
    //PURPOSE:compares this.root with parameter tree and returns 1 or -1
    //INPUT PARAMETER:
    //tree: the tree to be compared to
    //OUTPUT PARAMETER:
    //result: returns 1 if this.root is greater than tree otherwise returns -1
    //---------------------------------------------------------
    compareTo(tree){
        if(tree.constructor!=HuffTree){
            throw new Error("type passed to compareTo is not of type Huffman");}
        else if(tree.constructor===HuffTree){
            if(tree.getData().getWeight()<this.getData().getWeight()){
                return 1;}
            else if(tree.getData().getWeight()===this.getData().getWeight()){

                if(this.checkWeight(this.root,null)>this.checkWeight(tree.getData(),null)){

                    return 1;
                }
                else if(this.checkWeight(this.root,null)<this.checkWeight(tree.getData(),null)){

                    return -1;
                }
                else if(this.checkWeight(this.root,null)===this.checkWeight(tree.getData(),null)){

                    return 1;
                }
                }
            else if(tree.getData().getWeight()>this.getData().getWeight()){
                return -1;}
        }

    }



    getData(){
        return this.root;
    }


    //----------------------------------------------------------
    //PURPOSE:goes through a tree and returns the smallest character in the tree
    //INPUT PARAMETER:
    //node: the tree to be checked
    //the smallest character on every recursive call
    //OUTPUT PARAMETER:
    //result: the smallest character in the tree
    //---------------------------------------------------------
    checkWeight(node,p){
        let result = null;
        if(node!=null){
            if(node.getLeft()===null&&node.getRight()===null){
                if(p==null){result = node.getData();}
                else if(p!=null){

                    if(p<node.getData()){
                        result = p;
                    }
                    else if(p==node.getData()){
                        result = p;
                    }
                    else if(p>node.getData()){
                        result = node.getData();
                    }

                }

            }
            else{
                result = this.checkWeight(node.getLeft(),result);
                result = this.checkWeight(node.getRight(),result);
            }
        }
        return result;}


    //----------------------------------------------------------
    //PURPOSE:searches the tree for a particular character in the tree and returns the path
    //INPUT PARAMETER:
    //node: the tree to be searched
    //k: the character to be searched for in the tree
    //path: the path
    //OUTPUT PARAMETER:
    //result: returns the path to character k
    //---------------------------------------------------------
    traverse(node,k,path){
        let result = null
        if(node!=null){
         if(node.getLeft()===null&&node.getRight()===null){

             if(node.getData()===k){
                 result = path
             }}
         else{
             if(result===null){
             result = this.traverse(node.getLeft(),k,path+"0");}
             if(result===null){
             result = this.traverse(node.getRight(),k,path+"1");}}
        }
        return result;
    }


















}
module.exports = HuffTree;