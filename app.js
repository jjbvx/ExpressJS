const express = require("express");
const path = require ("path");

const app = express();

app.get("/", (req, res) => {
    //res.send("Servidor Backend JHRR!");
    res.sendFile(path.join(__dirname + "/index.html"));    
});
app.listen(8000, () => {
 console.log("Puerto: ", 8000);
});
