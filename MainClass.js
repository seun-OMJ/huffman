//------------------------------------------------------------
//NAME: Omojola Oluwaseun
//STUDENT NUMBER: 7880480
//COURSE: comp 2150
//INSTRUCTOR: Ali Neshati
//ASSIGNMENT: assignment 4
//------------------------------------------------------------

"use strict";
let huffmanEncode = require("./HuffmanEncode");

function mainClass(){
    let a = new huffmanEncode("hamlet.txt");
    a.code();
}
mainClass();