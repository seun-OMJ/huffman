//------------------------------------------------------------
//HuffmanEncode.js
//NAME: Omojola Oluwaseun
//STUDENT NUMBER: 7880480
//this class encodes a file and creates a new encoded output file
//------------------------------------------------------------
"use strict";
let HuffTree = require('./HuffTree.js');
let Dictionary = require('./Dictionary.js');
let StringHash = require('./StringHash.js');
const fs = require("fs");
class huffmanEncode {
    constructor(file){
        this.file = file;
        this.arr = new Array();
    }

    //----------------------------------------------------------
    //PURPOSE:reads a file and stores the weights of characters in a dictionary
    //INPUT PARAMETER:
    //no input parameter
    //OUTPUT PARAMETER:
    //dic: returns a dictionary that holds all weights of characters in the file
    //---------------------------------------------------------
    readFile(){
        let dic = new Dictionary(20);
        let x =  fs.readFileSync(this.file,"utf8");
        let step =  0;
        for(let i = 0; i<x.length;i++){
            let count = 0;
            let a = new StringHash(x[i]);
            if(dic.contains(a.hashVal())){
            }
            else{
                for(let j = 0;j<x.length;j++){
                   if(x[i]===x[j]){
                       count++;
                   }
                }

                this.arr[step]=x[i];
                step++;
                dic.put(a.hashVal(),count/x.length);
                console.log(x[i],dic.get(a.hashVal()))
            }
        }
        return dic;
    }


    //----------------------------------------------------------
    //PURPOSE:coverts a file into encoded form and stores in an output file
    //INPUT PARAMETER:
    //dic: is a dictionary that holds the encoded values for all characters in
    //the input file
    //OUTPUT PARAMETER:
    //returns a tree containing all characters
    //---------------------------------------------------------
    joinTress(dictionary){
        let a = new Array();
        for(let i=0;i<this.arr.length;i++){
            let b = new StringHash(this.arr[i])
            a[i]=new HuffTree(this.arr[i],dictionary.get(b.hashVal()));
        }
        while(a.length>1){
            this.sort(a);
            let combine = a[0].combineTrees(null,a[0],a[1]);
            a.shift();
            a.shift();
            a.push(combine);
        }
        return a[0];
    }


    //----------------------------------------------------------
    //PURPOSE:sorts an array of huffman trees based on weight of the trees
    //INPUT PARAMETER:
    //array: an array that contains huffman trees
    //OUTPUT PARAMETER:
    //no return value
    //---------------------------------------------------------
    sort(array){
        for(let i=0;i<array.length;i++){
            for(let j = 0;j<array.length;j++){
                if(array[i].compareTo(array[j])===-1){
                    let temp = array[i];
                    array[i]=array[j];
                    array[j] = temp;
                }
            }
        }
    }


    //-------------------------------------------------------------------------
    //PURPOSE:calls all methods that processes a file and outputs a file with the huffman encoding
    //INPUT PARAMETER:
    //no input parameter
    //OUTPUT PARAMETER:
    //no return value
    //-------------------------------------------------------------------------
    code(){
        let a = this.readFile(this.file);
        let b = this.joinTress(a);
        console.log();
        let dic = new Dictionary(20)
        for(let i = 0;i<this.arr.length;i++){
            let a = new StringHash(this.arr[i]);
            console.log(this.arr[i]+": "+b.traverse(b.getData(),this.arr[i],""));
            dic.put(a.hashVal(),b.traverse(b.getData(),this.arr[i],""));
        }
        this.storeCode(dic);
    }


    //----------------------------------------------------------
    //PURPOSE:converts a file into encoded form and stores in an output file
    //INPUT PARAMETER:
    //dic: is a dictionary that holds the encoded values for all characters in
    //the input file
    //OUTPUT PARAMETER:
    //no return value
    //---------------------------------------------------------
    storeCode(dic){
        let str = fs.readFileSync(this.file,"utf8");
        let s = "";
        fs.writeFileSync("hamlet.txt.huff",s,"utf8");
        for(let i = 0;i<str.length;i++){
            let a = new StringHash(str[i]);
            fs.appendFileSync("hamlet.txt.huff",dic.get(a.hashVal()));
            fs.appendFileSync("hamlet.txt.huff"," ");
        }
        fs.appendFileSync("filename.txt.huff",'\n');
    }



}
module.exports = huffmanEncode;
