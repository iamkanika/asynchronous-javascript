console.log("script starts");
function hello(){
    console.log(" inside set time");
}
setTimeout(hello , 1000);
console.log("after set function");
console.log("script ends");
// set time out hmesha aone bad k code k bad hi chkega


console.log("Another example");
setTimeout(()=>{
    console.log("settime out function");
}, 0)
for( let i=0; i<100; i++){
    console.log("Kani..");
}
console.log("ends");

console.log("Clear Timeout");
 const id = setTimeout(()=>{
    console.log("settime out function");
}, 1000);
for (let i=0; i<100; i++){
    console.log("....");
}
console.log("settimeout id is", id);
console.log("clearing time out");
clearTimeout(id); // will terminate settimeout function 
console.log("script end");