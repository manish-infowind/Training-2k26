// in this include target , propertykey and descriptor \\

function logMethod(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> | void {
    console.log(`Target: ${target}, PropertyKey: ${String(propertyKey)}, Descriptor: ${descriptor}`);
// console.log("Target : "+target.name +" PropertyKey "+propertykey+"  Descriptor "+descriptor)
    return descriptor;
}
class Person1 {
    name = "raj"
    @logMethod
    greet() {
        console.log("Greet Kro ")
    }
}
