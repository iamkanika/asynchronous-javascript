// promises
// phle iska name future krke kch tha
// ye ek esi value hoti h ho hume future me pta lgegi
console.log("script start");
const bucket= ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
const friedRicePromise= new Promise((resolve, reject)=>{
    if(bucket.includes("vegetables")&& bucket.includes("salt")&& bucket.includes("rice")){
        resolve("Fried rice");
    }
    else{
        reject("couldn't do it");
    }
})
// friedRicePromise.then(
//     // jab promise resolve hoga
//     (myfriedRice)=>{
//     console.log("lets eat ", myfriedRice);
// }, 
// // jab reject hoga
// (error)=>{
//     console.log(error);
// });
// friedRicePromise.then( 
    // jab promise resolve hoga
    // null, 
// jab reject hoga
// (error)=>{
//     console.log(error);
// });
// khali reject ki care kar rhe h

friedRicePromise.then(
    // jab promise resolve hoga
    (myfriedRice)=>{
    console.log("lets eat ", myfriedRice);
}
).catch((error)=>{
    console.log(error);
});
setTimeout(()=>{
    console.log("set time out");
}, 0);
for(let i=0; i<100; i++){
    console.log(Math.random(), i);
}
console.log("script ends");