// Decorators are like "special functions" that add extra features to classes, methods, and properties
// Think of them as wrappers that add behavior without changing the original code


function Logger(constructor: Function){
    console.log(`Person is created ${constructor.name}`)
}


@Logger
class Person{
    constructor(){
        console.log("Person class is created ")
    }
}

const p = new Person()


