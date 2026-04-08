const personPrototype = {
    greet: function() {
        return `Hello, I'm ${this.name}`;
    },
    
    introduce: function() {
  return `I'm ${this.name} and I'm ${this.age} years old`;
    }
};


const john = Object.create(personPrototype);
john.name = 'John';
john.age = 30;
console.log(john.greet()); // Hello, I'm John
console.log(john.introduce()); // I'm John and I'm 30 years old
