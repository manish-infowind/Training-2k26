// interface User{
//     name:string;
//     age:number;

import { resolve } from "node:dns";

// }
// const u1:Partial<User>={
//     name:"mahi"

// };
// const u2:Pick<User,"name">={
//     name:"harshita"
// }
// console.log(u1,u2);

// interface sales{
//     department:string
//     years:number

// }

//  interface User {
//   name: string;
//   age: number;
//   email: string;
// }

 
// let user: User = {
//   name: "Wrong Name",
//   age: 20,
//   email: "old@gmail.com"
// };

// console.log("Before Update:", user);

// function updateUser(update: Partial<User>) {
//   user = { ...user, ...update };
// }

// updateUser({ name: "Mahi" });

// console.log("After Update:", user);

// function showName(user: Pick<User, "name">) {
//   console.log("Only Name:", user.name);
// }

// showName(user);

// interface user{
//     name:string
//     age:number


// }

// let User:user={
//     name:"mahima",
//     age:22

// }
// console.log("update ke phle",User);
// function updateuser(update:Partial<user>){
//  User={...User,...update};

// }
// updateuser({name:"mahi",age:21});
// console.log("update k bad",User)

// interface Sales{
//     name:string
//     departmentName:string
//     age:number
// }
//  let sales:Sales={
//  name:"mahi",
//  departmentName:"IT",
//  age:22   
    
// }
// function updatefun(update:Partial<Sales>){
// sales={...sales,...update}
// }
// updatefun({name:"lalalalal"})

// console.log("update k bad");
// function fetchdata():Promise<string  function getData(): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Data aa gaya");
//     }, 2000);
//   });

// }
// async function run() {
//   console.log("Start");

//   const data = await getData();

//   console.log(data);

//   console.log("End");
// }

// run();
