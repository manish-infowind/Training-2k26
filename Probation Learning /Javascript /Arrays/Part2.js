// Arrays Methods 

const arr =[2,34,5,2,52,4,653,223]

// Map -->
const arr1 = arr.map(num=>num*2);
console.log(arr1)

const arr2 =arr.map(num=> num+num);
console.log(arr1)

//===================================

// Filter 
const arr3 = arr.filter(num => num%2==0);  // filter even elements 
console.log(arr3)

const arr4 = arr.filter(num=> num==2)
console.log(arr4) 

const arr5 = arr.filter(num => num%3==0)
console.log(arr5)


// reduse 
const total1 = arr.reduce((total , num)=>total+num,0)
console.log(total1)


// find and it give which its find first 
const find1 = arr.find(num=> num <=4);
console.log(find1)

// Feature	  map()              	some()
// Purpose	Transform values	Check condition

const some1 = arr.some(num=> num >55);
console.log(some1)                // it returns only true or false(if some value are true then it give true ) 
                       


// Every (It checks all Elements follows conditions or not )
const CheckEvery = arr.every(num => num===0);
console.log(CheckEvery)


