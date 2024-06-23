const express = require("express");
const searchHistDB = require("../models/searchHistory");
const router = express.Router();
const Utils = require("../utils/apiUtils");
const searchHistoryDb = require("../models/searchHistory");

router.get("/", async function (req, res) {

  // search for searchHistory in mongodb
//   const search = await searchHistoryDb.findSearchedMovie(movieID)

  res.send("search history will be stored here");
});

module.exports = router;