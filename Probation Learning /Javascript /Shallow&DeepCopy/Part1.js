// Shallow Copy - > Give Reference of that object and changes will looks on Current Object Also 


const obj1={
    name1:"Hitesh",
    age1:34
} 
const obj2={
    name2:"Raj",
    name2:23
}
const obj3 = obj2
obj3.name2="Rahul"
console.log(obj3)
console.log(obj2)



//Deep Copy ----> No Changes will look  it create seperate memory for all object 

const obj4={
    name1:"Raju",
    age1:45,
    
} 
var  obj5= structuredClone(obj4);
obj5.name1="Ramesh"
console.log(obj5)
console.log(obj4)


// Problems with JSON method:
// - Loses functions
// - Loses undefined values
// - Loses Date objects (becomes strings)
// - Loses RegExp
// - Loses Map/Set
// - Loses circular references
var deepcopy = JSON.parse(JSON.stringify(obj5))  // This is also a different method to create a deepcopy
