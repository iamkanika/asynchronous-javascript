//  callbacks, callbak hell, pyramid of dom
// asynchronous programming
// console.log("script start");
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
// callback hell
// setTimeout(()=>{
//     heading1.textContent= "Heading 1"; 
//     heading1.style.color= "violet";
//     setTimeout(()=>{
//         heading2.textContent= "Heading 2"; 
//         heading2.style.color= "red"; 
//         setTimeout(()=>{
//             heading3.textContent= "Heading 3"; 
//             heading3.style.color= "red"; 
//             setTimeout(()=>{
//                 heading4.textContent= "Heading 4"; 
//                 heading4.style.color= "red";  
//                 setTimeout(()=>{
//                     heading5.textContent= "Heading 5"; 
//                     heading5.style.color= "red";   
//                     setTimeout(()=>{
//                         heading6.textContent= "Heading 6"; 
//                         heading6.style.color= "red";   
//                         setTimeout(()=>{
//                             heading7.textContent= "Heading 7"; 
//                             heading7.style.color= "red"; 
//                             setTimeout(()=>{
//                                 heading8.textContent= "Heading 8"; 
//                                 heading8.style.color= "red";   
//                         }, 2000);  
//                     }, 2000);
//                 }, 1000);
//             }, 1000); 
//         }, 1000);  
//     }, 2000);  
// }, 2000);
// }, 1000);

function changeText(element, text, color, time, onSuccesCallback, onfailureCallback){
    
    setTimeout(()=>{
        if(element){
        element.textContent = text;
        element.style.color=color;
        if(onSuccesCallback){
            onSuccesCallback();
        }
        }
        else{
            if(onfailureCallback){
                onfailureCallback();
            }
        }
    }, time)

}
changeText(heading1, "one", "yellow", 1000, ()=>{
    changeText(heading2, "two", "brown", 1000, ()=>{
        changeText(heading3, "three", "orange", 1000, ()=>{
            changeText(heading4, "four", "cyan", 1000, ()=>{
                changeText(heading5, "five", "purple", 1000, ()=>{
                    changeText(heading6, "six", "red", 1000, ()=>{
                        changeText(heading7, "seven", "blue", 1000, ()=>{
                            changeText(heading8, "eight", "green", 1000, ()=>{
    
                            }, ()=>{console.log("Heading8  does not exist");});
                        }, ()=>{console.log("Heading7  does not exist");});
                    }, ()=>{console.log("Heading6 does not exist");});
                }, ()=>{console.log("Heading5  does not exist");});
            }, ()=>{console.log("Heading4  does not exist");});
        }, ()=>{console.log("Heading3  does not exist");});
    }, ()=>{console.log("Heading2  does not exist");});
}, ()=>{console.log("Heading1  does not exist");});
// this is called callback hell or pyramid of dom
