const express = require("express");
const restapi = require("./restapi");
const clc = require("cli-color");
const server = express();
const port = process.env.PORT || 4000;

server.use("/restapi/", restapi);
server.get("*", (res, req) => {
    console.log(clc.red("Use /restapi/ path to reach mocks"))
})

server.listen(port);

console.log(clc.red.bgWhite("\n Mocks server is up and running at port " + port));

module.exports = server;
