// It is used as shortcut to change the type 
// Utility types are built-in TypeScript helpers that make working with types easier
// Think of them as "shortcuts" for creating new types from existing ones




interface User  {
name :String ,
age : number,
address: {
city :String ,
state : String,
country : String
}
}

// If interface is normal, I must give all properties. If I use Partial, all properties become optional,
//  so I can update only one property and no need to send others.
type PartialType = Partial<User>




//------------------------------------------------------------------------
// 2 . Required is used to tell all 

type RequiredType = Required<User>
const UpdateRequired :RequiredType={
   name :"Hitesh",
age : 34,
address: {
city :"Nimach" ,
state : "Madhya Pradesh",
country : "India "
}
}

//Yes, by default interface properties are required.
// They become optional only when you add ? or use something like Partial<T>.




// 3. PICK<T, K> - Select specific properties
// --------------------------------------
// Pick only specific properties from User

type PickSpecific = Pick<User ,'name' | 'age'>
const Pick : PickSpecific={
name:"HarryBhai",
age:42
}



// 4. Omit Remove Specific Propertise // Exclude Propertise 
type OmitType = Omit<User , 'address'>

const  checkOmit : OmitType ={
    name : "Raj",
    age :34,
}


// 5 .`Record<K, T>` creates an object type where **keys are of type `K` and values are of type `T`**.

type RecordType = Record<string , string>;

const UserData :RecordType={
    name : "Harry",
    age :"24"
}
// only 2 parameter <T,S>  


// By Default Interface is also Required  