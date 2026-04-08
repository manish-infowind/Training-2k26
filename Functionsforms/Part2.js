
// // Closure 
// A function remembers variables from its outer function
// even after the outer function finishes execution.
function ClosureTest(){
    let count =0;
 return {
    Increament : function(){
     count++;
     console.log("Increment Count = "+count)
    } ,

    Decreament : function(){
        count--;
        console.log("Decreament is  = "+count )
    },

    GetCount:function(){
        console.log("Your Count is "+count)
    }


 }
}

console.log(ClosureTest().Decreament())
console.log(ClosureTest().Increament())
console.log(ClosureTest().GetCount())




//--------------------------------------

// // Closure  Using return 
function ClosureTest1(){
    let count =0;
 return {
    Increament : function(){
     count++;
     return count
    } ,

    Decreament : function(){
        count--;
       return count
    },

    GetCount:function(){
        return count 
    }


 }
}

console.log(ClosureTest1().Decreament())
console.log(ClosureTest1().Increament())
console.log(ClosureTest1().GetCount())



function Exprement(){
    let outerAccess=3;
    return ()=>{
      console.log(outerAccess);
    }
}

Exprement()()

//------------CallBack-------//

function CallBack1(name ,CallBack){
    console.log("Name is "+name )
    CallBack()
}
function Greeting(){
console.log("Good Morning ")
}

CallBack1("Harry" , Greeting)


console.log()
//----Call Back - 2  ----//
function CallBack2(age ,CallBack){
console.log("Age is "+age )
CallBack()   // function call
}
function SayOk(){
console.log("Ok ..Ok ..")
}

CallBack2(34,SayOk)



//  Array Map Working internally Using CallBack ----------------------------------------->>>>>>>>>>>>>>>

function ArrayMap(arr,callback){
    let result =[]
    for(let i =0;i<arr.length;i++){
        result.push(callback(arr , arr[i], i ));
    }
    return result
}



arr=[2,4,2,45,2]
let finalMap =ArrayMap(arr,(array ,value,index)=>{
    return value*index
})

console.log(finalMap)


