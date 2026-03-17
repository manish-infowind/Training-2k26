// let msg: string = "mahima";
// console.log(msg);
// function add(a:number,b:number,c:number){
//     return a+b+c;

// }
// console.log(add(5,9,5))
// let name:string="mahima";
// console.log(`hello  ${name}`);
// let num:number[]=[3,5,6,7,54];
// console.log(num);
// interface person{
//     name:string;
//     age:number;

// }
// let p1:person={
// name:"mahima",
// age:22

// };
// console.log(p1);

// let data:string|number;
// data=45;
// data="mahima";
// console.log(data);
// function printstring(val:string){
//     console.log(val);
// }
// function identify<T>(value:T){
//     return value;

// }
// function printnum(val:number){
//     console.log(val);
// }
// interface user{
//    name:string;
//    age:number;
//    salary:number;
// }
//  function printuser(val:user){
//     console.log(`Name:${val.name}`);
//     console.log(` Age:${val.age}`);
//     console.log(`salary ${val.salary}`);
//  }
//  let v1:user={
// name:"mahima",
// age:34,
// salary:22

//  };

// printuser(v1);
// let person:[string,number]=["mahima",22]
//     console.log(person[0]);
//     console.log(person[1]);
//  let user:[string,number,number]=["huhuhu",12,223]
//  console.log(user[0]);
//  console.log(user[1]);
//  console.log(user[2]);


// let data:string|number;
// data="hello";
// console.log(data);
// data=22;
// console.log(data);
 interface student{
    id:number;
    name:string;
    age:number;

 }
 let students:student[]=[];
 function addstudent(id:number,name:string,age:number){
    students.push({id,name,age});
    console.log("student added suceessfully");
 }
 function viewstudents(){
    students.forEach(s=>{
        console.log(`ID:${s.id},Name:${s.name},Age:${s.age}`);
    })
 }
 function searchstudent(id:number){
    let s=students.find(stu=>stu.id===id);
    if(s){
        console.log(`found:${s.name}`);
    } else{
        console.log("not found");
    }

 }
 function deletestudent(id:number){
    let s=students.filter(stu=>stu.id!=id);
   console.log("student deleted sucessfuly");

 }
 
 
 addstudent(1,"mahima",22);
 addstudent(2,"mahi",20);
 viewstudents();
 searchstudent(1);
 deletestudent(1);
 viewstudents();

viewstudents();


