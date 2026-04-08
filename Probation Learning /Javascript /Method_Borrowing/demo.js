// Method Borrowing means borrow the methods of object from other object 
// using call() ,apply() , blind() 


//call() use 
const Person1 ={
    name :"Hitesh",
    age:24,
    city :"Neemuch"
}
const Person2={
    name :"Raj",
    age :34
}
function introduce(sayHello){
    console.log(`This is ${sayHello}...to...${this.name} `)
}
introduce.call(Person1 , "Hello")


// apply()
function introduce2(sayHello){
    console.log(`${sayHello}...to...${this.name} `)
}
introduce2.apply(Person2 , ["Hello" , "Ram" , "Mohan" ])


// bind() is a method that creates a new function where this is permanently set to a specific object.


const Person3 ={
    name :"Hitesh",
    greet :function (){
    console.log(`Hello  ${this.name}`)
 }
}
const Person4={
    name :"Raj",
    age :34
}


const takefunction =Person3.greet.bind(Person2);   // This return Function 
takefunction()