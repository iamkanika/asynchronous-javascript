const URL = "https://jsonplaceholder.typicode.com/posts";
const xhr= new XMLHttpRequest();
xhr.open("GET", URL);
xhr.onload = ()=>{
    if(xhr.status>=200){
    const data = JSON.parse(xhr.response);
    // console.log(data);
    const id = data[3].id;
    console.log(id);
    const xhr2 = new XMLHttpRequest();
    const URL2 = `${URL}/${id}`;
    console.log(URL2);
    URL2.open("GET", URL2);
    xhr2.onload= ()=>{
        const data2= JSON.parse(xhr2.response);
        console.log(data2);
    }
    xhr2.send();
    }
    else{
        console.log("something went wrong");
    }
}

// for handling network related errors

xhr.onerror= ()=>{
    console.log("netwoek error");
}
xhr.send();