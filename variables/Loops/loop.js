//while loop
var x=1;
while(x<=10)
{
console.log(x);
x++;
}
console.log('end');
//do while loop
var x=1;
do{
    console.log(x);
    x++;
}while(x<=10);
//for loop
var x=1;
for(var x=1;x<=10;x++){
    console.log(x);
}
//condition checking
console.log(3+3+"2");
console.log("5"-"2");
console.log("5"*"2");
console.log("5"/"2");
console.log("5"%"2");
//conditional statement
//switch
var x=parseInt(Prompt('enter the choice'));
switch(x){
    case 1:
        document.write("first");
        break;
    case 2:
        document.write("second");
        break;
    default :
        document.write("wrong choice");
}