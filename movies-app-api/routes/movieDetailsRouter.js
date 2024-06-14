const express = require("express");
const router = express.Router();
const apiKey = process.env.API_KEY;

router.get("/:movieID", async function (req, res) {

  const movieID = req.params.movieID;
  const queryParams = `apiKey=${apiKey}&i=${movieID}`;
  const url = `https://www.omdbapi.com/?${queryParams}&plot=full`;

  const response = await fetch(url);
  const data = await response.json();
  console.log("data on server side", data);
  res.status(200).json(data);
});

module.exports = router;