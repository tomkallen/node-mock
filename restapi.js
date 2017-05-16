const express = require("express");
const router = express.Router();
const clc = require("cli-color");

const rest = require("./config");

Object.keys(rest).forEach(route => {
    router.get(route, (req, res) => {
        console.log(clc.yellow("\nNew request ", req.path));
        if (Object.keys(req.query).length !== 0) {
            console.log(clc.yellow("Received query parameters:"));
            console.log(req.query);
            console.log("appending query parameters to the response body");
            rest[route] = Object.assign(rest[route], req.query);
        }

        res.send(rest[route]);
        console.log("Responding with ", rest[route]);
    });
});

router.get("*", (req, res) => {
    console.log(clc.yellow("\nNew request ", req.path));
    cosole.log(clc.red("No such api path, check 'config.js'"));
});

module.exports = router;
