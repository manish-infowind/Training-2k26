//without callback
// function say(name){
//      console.log("Hello "+name);
     
// }
// function ask(){
//     console.log("How are you ");
// }
//  say("Harshita ");
//  ask();
//With CallBack
function say(name , ask1){
     console.log("Hello "+name);
     ask1();
}
function ask(){
    console.log("How are you ");
}
 say("Harshita ", ask);
 // understand with real life example
 function orderFood(callback) {
  console.log("Food is being prepared...");

  setTimeout(() => {
    console.log("Food is ready!");
    callback(); // calling you back
  }, 2000);
}

function notifyCustomer() {
  console.log("Customer notified!");
}

orderFood(notifyCustomer);
//another example 
function deliverPackage(callback) {
  console.log("Package is on the way...");

  setTimeout(() => {
    console.log("Package delivered!");
    callback();
  }, 3000);
}

deliverPackage(() => {
  console.log("Door opened!");
});
 
