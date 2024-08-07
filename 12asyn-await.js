// asyn await
const URL = "https://jsonplaceholder.typicode.com/posts";


async function getPost() {

    const response = await fetch(URL);
    const data= await response.json();
    console.log(response);
    console.log(data);
    return data;
}// resturn promises
const returned= getPost();
// console.log(returned);

getPost()
    .then(myData=>{
        console.log(myData);
    })
    .catch(error=>{
        console.log("error");
    })




// fetch(URL)
//     .then(response =>{
//         return response.json()
//     })
//     .then(data=>{
//         console.log(data);
//     })