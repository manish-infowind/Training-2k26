function orderPizza(size) {
  return function(topping) {
    return function(drink) {
      console.log(`Order: ${size} pizza, ${topping}, ${drink}`);
    };
  };
}

orderPizza("Large")("Cheese")("Coke");
//another
const coffeeOrder = type => size => sugar => {
  console.log(`${size} ${type} coffee with ${sugar} sugar`);
};

coffeeOrder("Latte")("Medium")("Less");
//again another
const discount = percent => price => price - (price * percent / 100);

const tenPercentOff = discount(10);

console.log(tenPercentOff(500)); // 450
console.log(tenPercentOff(1000)); // 900
//Example
const multiply = a => b => a * b;

const double = multiply(2);
double(5);