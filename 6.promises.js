// function returning promise
function ricePromise(){
    const bucket= ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
    return new Promise((resolve, reject)=>{
        if(bucket.includes("vegetables")&& bucket.includes("salt")&& bucket.includes("rice")){
            resolve("Fried rice");
        }
        else{
            reject("couldn't do it");
        }
    })
}

ricePromise().then(
    // jab promise resolve hoga
    (myfriedRice)=>{
    console.log("lets eat ", myfriedRice);
}
).catch((error)=>{
    console.log(error);
});

// function && settimeout 



function myPromise(){
    return new Promise((resolve, reject)=>{
        const value=true;
        setTimeout(()=>{
            if(value){
                resolve();
            }else{
                reject();
            }
        },2000);
    })
}
myPromise().then(()=>{console.log("resolved")})
.catch(()=>{console.log("rejected")
})