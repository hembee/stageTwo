const express = require("express");
const router = express.Router();
const personController = require("../controllers/person.controller");


router.get("/", (req, res) => {
    res.send("IT WORKS!!!!!")
})




module.exports= router