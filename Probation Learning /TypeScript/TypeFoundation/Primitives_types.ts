// For example, to create an object with an inferred type which includes name: string and id: number, you can write:

// let name : number;
// let id : string;
// const user = {
//   name: "Hayes",
//   id: 0,
// };


// interface User {
//     age : string
//     password : number
// }

// const user: User = {
//     age: "Hello",
//     password: 1234
// };

//-----------------------Primivite Types ---------------------------------//

let name :string = "Hitesh"
let age :number = 234
let isActive =true 
let EmptyOrNot = null   // Intentionally empty 
let UndefinedOrNot = undefined
let take_symbol = Symbol("id") // take only unique symbole 


// Function with type safe 

//type number 
function  total(a:number , b: number ) : number {
       return a+b     
}


// type string 
function Concate(first:string , last : string ) : string {
    return ` first name is ${first}  & Last name is  ${last}`
}
console.log(Concate("Hitesh" , "Gupta"))


// pass as an argument with null 
interface User3{
    id:number
    name:string
}

function getUserById(id : number ) :User3 | null{
   const users =[
       {id:1 ,name :"Hitesh"} ,
         {id:2 ,name :"Raj"} 
    ]
 let user = users.find(u=>u.id===id)
return user ||null
}


console.log(getUserById(2))

// Practiase Questions 

//-----------------Medium 
function DiscountCheck(age : number ):boolean{
if(age>65){
    return true
}else{
    return false
}

}

if(DiscountCheck(93)){
    console.log("Discount is available for you ")
}else{
    console.log("discount is not Available for you ")
}


//----------------------------Hard 

// HARD: Create a function that processes user input:
// - Takes a string input that could be a number
// - Returns the number if valid, null if invalid
// - Handle cases like "123", "abc", "", "12.5"


function CheckStringOrNot(input: string) :number | null{
  if(input.trim()==="") return null;
   const num = Number(input);
   return isNaN(num)?null:num 
}

console.log(CheckStringOrNot("123"))





