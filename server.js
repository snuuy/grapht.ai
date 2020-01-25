const express = require('express');
const mongoose = require
const bodyParser = require('body-parser');
const app = express();
const path = require('path')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const grapht = require("./routes/graphtRoute");

//use routes
app.use("/api/grapht", grapht);

//serve frontend files
app.use(express.static(path.join(__dirname, "./client/build")));

//this must be the last route
app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
);

app.listen(8000, () => {
    console.log("Server is listening on port 3000");
});