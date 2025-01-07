const express = require("express");
const backEnd = express();

backEnd.get("/ungabunga", (request, response)=>{
    response.json([
        { id: 1, name: "Ganesh", age: 26},
        { id: 2, name: "Gorav", age: 27},
        { id: 3, name: "Vorag", age: 28}
    ])
});

backEnd.listen(6969, ()=>{
    console.log("Node application is running on port no: 6969");
});