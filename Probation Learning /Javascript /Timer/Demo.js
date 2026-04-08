// This is usefull when we need after some interval of time some things works 
 
// Utility types are built-in TypeScript helpers that make working with types easier
// Think of them as "shortcuts" for creating new types from existing ones

setTimeout(() => {
    console.log("Hitesh")
}, 5000);


// For Repetation


// setInterval(()=>
// console.log("Repeate again...") ,1000
// )

// setImmediate is a function is used to run this when code is run completely

console.log("Helo Harry -->1")
console.log("A");

setImmediate(() => {
  console.log("B");
});

console.log("C");
