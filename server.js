const express = require("express");
const restapi = require("./restapi");
const clc = require("cli-color");
const server = express();
const port = 4000;

const cWarn = function(message){
    console.log(clc.white.bgRed(message))
}

const cInfo = function(message){
    console.log(clc.yellow(message))
}

server.use("/restapi/", restapi);
server.get("*", (res, req) => {
    res.send("can't reach api");
})

server.listen(port);
cInfo("Node Mock server v0.0.2 ||  Alex Bykoff");
cInfo("Server is up and running at port " + port);

module.exports = server;
