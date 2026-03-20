function outer() {
  let money = 100;

  function inner() {
    console.log(money);
  }

  return inner;
}

const myBag = outer();
myBag(); // 100
//different example
function createAccount(balance) {
  return {
    deposit: function(amount) {
      balance += amount;
    },
    withdraw: function(amount) {
      balance -= amount;
    },
    checkBalance: function() {
      console.log(balance);
    }
  };
}

const account = createAccount(1000);

account.deposit(500);
account.checkBalance(); // 1500
//different
function greet(name) {
  return function() {
    console.log("Hello " + name);
  };
}

const sayHelloToAman = greet("Harshita");
sayHelloToAman();
//different 
function test() {
  let x = 10;
  return function() {
    console.log(x);
  };
}

const fn = test();
fn();