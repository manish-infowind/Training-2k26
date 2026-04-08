SS// ------------------------------------------------------------------------------
/* Variable rule ---  Function scope can be redeclare */ 
function varCheck(){
    var take ="Hello Hitesh "  
    if(true){
       var take = "Jai Ho"   
    }
    console.log(take);
}

varCheck();


// Let --> Block Scope cannot be redeclare 

function letCheck(){
    let num=234;
    if(true){
      let   num=345
        console.log(num)
    }
    console.log(num)
}

letCheck()

// can't be redeclare and reassign 
const pi=3.14
console.log(pi)


// Primitive Types & typeof
// =======================

console.log(typeof "hello");        // "string"
console.log(typeof 42);             // "number"  
console.log(typeof true);           // "boolean"
console.log(typeof null);           // "object" (historical bug!)
console.log(typeof undefined);      // "undefined"


// Because Var is functional scope so...
function checkAllScope(){
// console.log(varTake)    undefined (declaration hoisted, not assignment)
// console.log(letCheck)   ReferenceError(Can't Access Before initialisation) 
// console.log(constCheck)   ReferenceError(Can't Access Before initialisation) 

var varTake=244
let letCheck=350
const constCheck=342


}


checkAllScope()
