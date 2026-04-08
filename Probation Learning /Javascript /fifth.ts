// const person1 = {
//   name: "mahima",
//   greet() {
//     console.log("Hello " + this.name);
//   }
// };

// const person2 = { name: "mahi" };

// person1.greet.call(person2);
// const obj1 = { a: 1, b: { c: 2 } };
// const obj2 = { ...obj1 };

// obj2.b.c = 99;

// console.log(obj1.b.c);
// const obj1 = { a: 1, b: { c: 2 } };
// const obj2 = JSON.parse(JSON.stringify(obj1));

// obj2.b.c = 99;

// consoconst obj1 = { a: 1 };

const obj1 = { a: 1 };

const obj2 = { b: 2 };

// obj2.__proto__ = obj1;

// Object.setPrototypeOf(obj2, obj1);

// console.log(obj2.a);

// const obj = {};
// console.log(Object.getPrototypeOf(obj)); 
// setTimeout(() => {
//   console.log("Hi 2 sec baddd");
// }, 2000);
// const a=2;
// console.log(a);
// function outer() {
//   let count = 0;

//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }

// const fn = outer();

// fn(); 
// fn(); 
function add(a: number, b: number, callback: (res: number) => void) {
  let result = a + b;
  callback(result);
}

add(2, 3, (res) => {
  console.log(res);
});
console.log(res);