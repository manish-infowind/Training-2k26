
// 3. HOW IT WORKS
// type TypeName = TypeExpression;

type nameAlias  = String ;

let name1: nameAlias ="Hello"  // no need to write again and again Type 

// Object Type Alias 

type UserCheck = {
    u_id: number,
    u_name : String ,
    u_date: Date,
    u_age : number 
}


const userData : UserCheck ={
u_age : 23,
u_name : "Harry Bhai",
u_id : 224,
u_date : new Date()
}

