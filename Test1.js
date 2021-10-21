//------------------------------------------------------------
//Test1.js
//NAME: Omojola Oluwaseun
//STUDENT NUMBER: 7880480
//this class tests functionality from part 1
//------------------------------------------------------------
"use strict";
let assert = require('assert');
let Dictionary = require("./Dictionary.js");

class test1{
    conTest(){
        let a = new Dictionary(4);
        assert(a.constructor===Dictionary);
    }
    getTest(){
        let a = new Dictionary(4);
        assert(a.get(2)===-1);
    }
    putTest(){
        let a = new Dictionary(4);
        a.put(2,10);
        assert(a.get(2)===10);
        a.put(2,20);
        assert(a.get(2)===20);
    }
    containTest(){
        let a = new Dictionary(4);
        assert(a.contains(2)===false);
        a.put(2,10);
        assert(a.contains(2)===true);
    }

    isEmptyTest(){
        let a =  new Dictionary(4);
        assert(a.isEmpty());
    }}
    function Main(){
        let a = new test1();
        a.conTest();
        a.getTest();
        a.putTest();
        a.containTest();
        a.isEmptyTest();
        console.log("part1 tests passed");
}
Main();