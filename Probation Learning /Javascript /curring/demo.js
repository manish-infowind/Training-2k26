function add(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
console.log(add(2)(4)(6))



// IT Helps to makes code resuable and all

function add(a) {
  return function (b) {
    return a + b;
  };
}

const addTen = add(10);

console.log(addTen(5));   // 15
console.log(addTen(20));  // 30
console.log(addTen(100)); // 110