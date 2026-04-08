// Array 
const arr = [23,42,42,5423,24,24]
const fruit =["Banana" , "Mango" , "Apple" , "Orange"]


// Array Destruction 
const[take1 , take2 , ...take3]=fruit
console.log(take1)
console.log(take2)
console.log(take3)


// Skip Element 
const[new1 , ,new2]=fruit
console.log(new1)
console.log(new2)


// Spread Operator 

// Copy Array 
const takeFruits=[...fruit];
console.log(takeFruits)

// Merge Array
const Array2=["Kiwi" , "Pinaple" , "Stawberry"]
const mergeArray =[...fruit , ...Array2];
console.log(mergeArray);

const person ={
    name:"Hitesh",
    age:21
}


// Copy Object 
const ObjectCopy ={...person}
console.log(ObjectCopy.age)

// Merging Object 
const ObjectCopy2={...person , city:"Neemuch" , country:"India"}
console.log(ObjectCopy2)



// In JavaScript, optional chaining (?.) means:
//  If something does NOT exist, it will NOT throw an error
//  Instead, it simply returns undefined

let Array1 =["Ram" , "Shyam" , "Mohan" ,"Rohan"]
console.log(Array1?.[5])   // Optional Channing Concept 



