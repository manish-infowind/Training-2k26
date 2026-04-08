 const user={
    name :"Raj",
    age :24
}

function Gene<T>(agr :T):T{
    return agr
}

console.log(Gene("Harry"))
console.log(Gene(23))
console.log(Gene(user))

//================================================

// 2 . Generic With Interface 

interface UserData<T>{
    name :String
    age :T

}


