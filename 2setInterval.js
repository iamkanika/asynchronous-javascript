// set Interval
// console.log("script start");
// setInterval(()=>{
//     console.log(Math.random());
// },1000);
// console.log("script ends");

const body = document.body;
console.log(body);
 const intervalId = setInterval(()=>{
    const red = Math.floor(Math.random()* 126);
    const blue = Math.floor(Math.random()* 126);
    const green = Math.floor(Math.random()* 126);
    const rgb = `rgb(${red}, ${green}, ${blue})`;
    body.style.background =rgb; 
    // console.log(rgb);
    // console.log(intervalId); 
}, 1000);
const button = document.querySelector("button");
// console.log(button); 
button.addEventListener("click", ()=>{
    clearInterval(intervalId);
    button.textContent= body.style.background;
});
