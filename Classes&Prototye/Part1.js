class Animal {
     name1 ;
     eat ;
     aliveOrnot ;

    constructor(name , eat , aliveOrnot){
        this.name1 = name 
        this.eat = eat 
        this.aliveOrnot =aliveOrnot
    }

    getDetails(){
        console.log(`This is name ${this.name}, This is what they eat ${this.eat}, Is Alive or not ${this.aliveOrnot}`);  
    }


}

const take = new Animal("Cat","Fish", true )
console.log(take.name)
console.log(take.eat)
console.log(take.aliveOrnot)


//Class Inheritence 
class Dogs extends Animal{
    constructor(name , gender ){
    super("Dog","peanut",false)
        this.name=name 
    this.gender 
    }
    
}

const d = new Dogs("dogiee","male")
console.log(d.aliveOrnot)
console.log(d.name)
console.log(d.name1)


// set and get using get method name , set method name 
