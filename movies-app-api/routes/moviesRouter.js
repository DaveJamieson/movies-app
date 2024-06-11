const express = require("express");
const router = express.Router();

router.get("/movies/:movieName", async function(req, res) {
  const movieName = req.params.movieName;
  const apiKey = process.env.API_KEY
  const queryParams = `apiKey=${apiKey}&&s=${movieName}`
  const url = `https://www.omdbapi.com/?${queryParams}`

  const response = await fetch(url)
  const data = await response.json()
  res.status(200).json(data)
})

module.exports = router;