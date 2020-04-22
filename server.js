const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");
const uuid = require("uuid");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(espress.static("public"));

app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "public", "notes.html"));
});

app.get("api/notes", function(req, res){
    readFileAsync("./db/db.json", "utf8")
    .then (data => {
        let notesJSON = JSON.parse(data)
        res.json(notesJSON)
    })
});

app.post("/api/notes", function (req, res){
    
})











app.listen(PORT, function() {
console.log("Server listening on PORT " + PORT);
});