//In type scripts Function looks 
// Function add(a:number , b:number )number { return a+b}

// In javascript function looks 

// Function Declaration 
function add(){
return a+b;
}



// Function Expression 
const take=function multiply(){
    return 4*4;
}
console.log(take())  // noty directly call like multiply()



// Arrow Functions 
const SayName = (name)=>{
   return console.log("Name is  "+name )
}

SayName("Raj Kumar")

// Short Arrow functions 
const ShortArrow=()=> console.log("This is short Arrow Function");
ShortArrow()


//Default Parameter 

// Rest Parameter  
function RestCheck(...num){
return num.reduce((total,num)=>total+num,1)
}
console.log(RestCheck(1,2,3,4))



// this 
let nameIs="Hitesh"
function Regular(){
console.log(nameIs)
}



// This Context 

/* 
Arrow functions were introduced in ES6.
They do not create their own this.

Instead they inherit this from the surrounding scope.
This is called lexical this.
*/
const Object={
    name:"Hitesh",
    age:21,

    SayName: function(){
        console.log(this.name)  // Can Be accessable 

    },
    SayAge :()=>{
        console.log(this.age)
    }
};

Object.SayName()
Object.SayAge()  // Can't Access Age because this not work in arrow functions 



