const express = require("express");
const searchHistDB = require("../models/searchHistory");
const router = express.Router();

router.get("/", async function (req, res){
    // check the search history from DB

    // send it back to the client
    res.send("We are working on this feature atm...")
})

module.exports = router;