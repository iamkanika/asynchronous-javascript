console.log("working of ajax");
const Url= "https://jsonplaceholder.typicode.com/posts";
const xhr= new XMLHttpRequest();
// console.log(xhr); 
//step 1
console.log(xhr.readyState);
xhr.open("GET",Url);
console.log(xhr.readyState);
xhr.onreadystatechange= function(){
    console.log(xhr);
    console.log(xhr.readyState);
    if(xhr.readyState===4){
        // console.log(xhr.response);
        // console.log( typeof xhr.response); 
        const response= xhr.response;
        const data= JSON.parse(response);
        console.log(data);
        console.log(typeof data);
    }
}

xhr.send();
xhr.onload = function(){
    console.log(xhr.readyState); 
}
// tbbhi chlega jb 4 hoga ready state