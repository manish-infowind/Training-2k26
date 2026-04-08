// Looks  in  TypeScript 
// Interface User { name : String , age : Number }
const Person={
    name:"Hitesh",
    age :23 ,
    Mobile:7894324424 , 
    isActive:false , 
    address:{
      city : "Neemuch",
      country:"India" ,
      local_Address:"Ramavtar Colony "
    }
}
// console.log(Person.name)
// console.log(Person.Mobile)
// console.log(Person.age)
// console.log(Person.isActive)
// console.log(Person.address.city)



for(let key in Person){
    console.log(key)
}

// Dot Notation 
console.log(Person.name)

// Bracket Notation
console.log(Person["Mobile"])

//Object Destruction 
const {age,name}=Person
 console.log(age)
 

 //// Nullish Coalescing (??)
const users ={
    name:null,
    age:21,
    course:"Mca"
}

console.log(users.name??"Guest")  // in this if the value is null or undefined it return default declared value 




// Object Methods
// =============

const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  color: "blue"
};

const keys = Object.keys(car);        // ["make", "model", "year", "color"]
const values = Object.values(car);    // ["Toyota", "Camry", 2020, "blue"]
const entries = Object.entries(car);  // [["make", "Toyota"], ["model", "Camry"], ...]
