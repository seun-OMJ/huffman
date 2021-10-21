//------------------------------------------------------------
//test2.js
//NAME: Omojola Oluwaseun
//STUDENT NUMBER: 7880480
//this class creates a hashable object
//------------------------------------------------------------
"use strict";
let assert = require('assert');
let HuffTree = require('./HuffTree.js');
class test{
    conTest(){
        let a = new HuffTree("z",1);
        assert(a.constructor===HuffTree);
    }
    checkWeightTest(){
        let a = new HuffTree("h",1);
        let b = new HuffTree("k",2);
        let c = a.combineTrees(null,a,b);
        assert(c.checkWeight(c.getData(),null)=="h");
    }

    combineTree(){
        let a = new HuffTree("h",1);
        let b = new HuffTree("k",2);
        let c = a.combineTrees(null,a,b);
        assert(c.getData().getLeft()===a.getData());
    }
    compareToTest(){
        let a = new HuffTree("h",1);
        let b = new HuffTree("k",2);
        assert(b.compareTo(a)===1);
    }
    traverseTest(){
        let a = new HuffTree("h",1);
        let b = new HuffTree("k",2);
        let c = a.combineTrees(null,a,b);
        let d = new HuffTree("w",1);
        let e = d.combineTrees(null,c,d);
        let g = e.traverse(e.getData(),"k","");
        assert(g =="11");

    }


}
function main(){
    let a = new test();
    a.conTest();
    a.checkWeightTest()
    a.combineTree();
    a.compareToTest()
    a.traverseTest();
    console.log("part2 tests passed");
}
main();