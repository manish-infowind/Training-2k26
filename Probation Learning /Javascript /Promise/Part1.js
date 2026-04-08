const promise = new Promise((resolve , reject )=> {
    success = false 
    if(success){
        resolve("Task Completed ")
    }
    else {
        reject("Task Rejected ")
    }
} );

promise 
  .then((result)=>console.log(result))
  .catch((error)=> console.log(error))