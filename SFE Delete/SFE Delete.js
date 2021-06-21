

axios.delete("http://localhost:8080/delete/{index}")
.then((response)=>{
    console.log(response);
    for(let singLeRecord of response){
        printToScreen(singLeRecord)
    }
})
.catch((err)=>{
    console.log(err);
})

const printToScreen =(record)=>{
    const {name,id,price,rating} = record
    
    const Game = document.createElement("Game");
    Game.id=id;
    


    const text = document.createTextNode(`${id}-The game is called ${name}, The price for the game would be $${price}, and the public rating is ${rating}.`)

    Game.appendChild(text)
    div.appendChild(Game)
}