axios.get("http://localhost:8080/get")
.then((response)=>{
    console.log(response);
    // for(let singLeRecord of response){
    //     printToScreen(singLeRecord)
    // }
})
.catch((err)=>{
    console.log(err);
})
