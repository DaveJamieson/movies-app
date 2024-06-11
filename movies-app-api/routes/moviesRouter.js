const express = require("express");
const validateMovie = require("../middlewares/validateMovie");
const router = express.Router();
const apiKey = process.env.API_KEY

router.get("/movies/:movieName", validateMovie, async function(req, res) {
  const movieName = req.params.movieName;
  const queryParams = `apiKey=${apiKey}&&s=${movieName}`
  const url = `https://www.omdbapi.com/?${queryParams}`

  const response = await fetch(url)
  const data = await response.json()
  res.status(200).json(data)
})

module.exports = router;