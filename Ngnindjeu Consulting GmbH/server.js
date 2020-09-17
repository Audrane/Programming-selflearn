"use strict";
exports.__esModule = true;
var express = require("express");
var __dirname;
var router = express();
router.listen(8080);
router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.use("/html", express.static(__dirname + "html"));
router.use("/css", express.static(__dirname + "/css"));
router.use("/scripts", express.static(__dirname + "/scripts"));
router.get("/", function (req, res) {
    res.status(200);
    res.sendfile(__dirname + "/html/index.html");
});
