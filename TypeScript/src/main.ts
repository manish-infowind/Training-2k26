let username: string ="Harshita";
let age: number=20;
let isStudent: boolean=true;

console.log("username:",username);
console.log("age:",age);
console.log("Student:",isStudent);

let marks: number = 90;
//marks='ninety'; // it causes error thats why type is needed beacuse the type of marks is number not string 
// type string is not assingnable to number
// let data: any ="Hello";
// data = 100;
// data = true;
// console.log(data.toUpperCase());
let data: unknown = "Hello";

if (typeof data === "string") {
  console.log(data.toUpperCase()); 
}
//in previous code type is any thats why it causes error here clearly define that unknown means it is not known varable so first we have to check the type with type of and then perform operations 
// NOW FUNCTIONS IN TYPESCRIPT 
function sayHello(name: string ): string {
    return "Hellllloooooooo" + name;
}
 console.log(sayHello("Harshita"));
//basic function (Type Annotation)
// name: string ----->Input string
// :string ------->return type
// function sayHello(name : string ) :string{
//     return 10;
// } 
function message():void {
    console.log("Hello");
}
// void return nothing 
// funbction message(): void {
//     retrun "hello";
// }
// --------------------------//
// OPTIONAL PARAMETERS
function say(name :string,age?: number){
    console.log(name,age);
}
 say("what i have to say");
 //DEFAULT PARAMERETS
 function saySomething(name :string,age: number =20){
    console.log(name,age);
}
   saySomething("Again what i have to say");

//ARROW FUNCTIONS
const add=(a: number ,b:number): number => {
    return a+b;
};
  console.log(add(5,3));
  //----------------------------//
  //FUNCTION TYPE 
  //we can declare the type of whole function
  let multiply: (a: number ,b:number) => number;
  multiply =(x,y) => x*y;
  console.log(multiply(2,3));

  //----------------------------//
  //UNION TYPES IN FUNCTION
  function printId(id: number | string ){
    console.log("ID :" , id); 
  } 
   printId(1);
   printId("a1");
   //---------------------//
   // Type Narrowing
   function printId1(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
} 


