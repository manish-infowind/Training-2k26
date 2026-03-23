// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// type UserWithoutEmail = Omit<User, "email">;
// type userwithoutname=Omit<User,"name">;

// const user: UserWithoutEmail = {
//   id: 1,
//   name: "Bhai"
// };
// let userr:userwithoutname={
//     id:1,
//     email:"hello@gmail.com"
// }
// let user={

// type user={
//     id:number,
//     name:string,
//     adress:string,
//     email:string,
//     active:boolean;
// }
// type userwithoutmail=Omit<user,"name">;
// const userr:userwithoutmail={
//     id:1,
//     adress:"shyama nagar",
//     email:"mahi@gmail.com" ,
//     active:false
   
// }
// type Marks = Record<string, number>;

// const studentMarks: Marks = {
//   math: 90,
//   science: 85
// };
 
// type Roles = "admin" | "user" | "guest"|"worker";

// const rolePermissions: Record<Roles, boolean> = {
//   admin: false,
//   user: false,
//   guest: false,
//   worker:true
// };
// type roles="devloper"|"HR"|"client";
// const acessrole:Record<roles,boolean>={
//     devloper:true,
//     HR:true,
//     client:false
// }
// type sales="manager"|"recruiter";
// const acesssales:Record<sales,boolean>={
//     manager:false,
//     recruiter:true
// }
