// EASY: Add type annotations to this function
function multiply(x:number, y:number) :number {
    return x * y;
}
console.log(multiply(2,3))


// HARD: Create a function that processes an array of numbers:
// - Takes numbers array and an optional threshold number
// - Returns array of numbers greater than threshold (default 10)
// - Properly type all parameters and return value

let araye = [13,23,42,34,"Hello",45]
function ReturnsArray (array:number[] ,threshold:number=10   ) : number[]{
let contain= array.filter(num=> num >threshold);
return contain
}
