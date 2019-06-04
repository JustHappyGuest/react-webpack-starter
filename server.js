const express = require("express");
const fs = require("fs");

const server = express();

console.log("asd");

server.use(express.static(__dirname + "/dist"));

server.get("/", (req, res) => {
    const stream = fs.createReadStream("index.html");
    stream.pipe(res);
});

server.listen(9000, () => console.log("Run..."));
