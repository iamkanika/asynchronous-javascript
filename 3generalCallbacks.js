// undersatnd callbacks
// function myFunc(){
//     console.log("function is doing some task1");
// }
// myFunc();
// function myFunc2(){
//     console.log("function is doing task 2");
// }
//  myFunc2();
 // ordinary method


 //callbacks
 function myFunc(callback){
    console.log("function is doing some task1");
    callback();
}
myFunc(myFunc2);
function myFunc2(){
    console.log("function is doing task 2");
}

function getTwoNumbers(number1, number2 , callback1){
    // console.log(number1 , number2);
    if (typeof number1 === "number" && typeof number2=== "number"){
    callback1(number1, number2);
    }
    else{
        console.log("wrong data type")
    }
}

function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}
getTwoNumbers(4,5 , addTwoNumbers);
getTwoNumbers("4", "5", addTwoNumbers);