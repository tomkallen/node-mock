const express = require("express");
const router = express.Router();
const clc = require("cli-color");
const rest = require("./config");

const cWarn = function(message){
    console.log(clc.white.bgRed(message))
}

const cInfo = function(message){
    console.log(clc.yellow(message))
}

const cLog = function(message){
    console.log(message)
}

Object.keys(rest).forEach(route => {
    router.get(route, (req, res) => {
        console.time("request_length");
        cInfo((new Date()));
        const request = "New request " + req.path;
        cInfo(request);
        if (Object.keys(req.query).length !== 0) {
            cInfo("Received query parameters:");
            cLog(req.query);
            cLog("appending query parameters to the response body");
            rest[route] = Object.assign(rest[route], req.query);        }

        res.json(rest[route]);
        cLog("Responding with ", rest[route]);
        console.timeEnd("request_length");
    });
});

router.get("*", (req, res) => {
    cWarn("No such api path, check 'config.js'");
});

module.exports = router;
