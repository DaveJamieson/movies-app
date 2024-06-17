const express = require("express");
const validateMovie = require("../middlewares/validateMovie");
const Movie = require("../models/movie")
const router = express.Router();
const apiKey = process.env.API_KEY;

router.get("/", async function (req, res) {
  res.send("Please enter a movie name");
});

router.get("/:movieName", validateMovie, async function (req, res) {
  const movieName = req.params.movieName;
  const queryParams = `apiKey=${apiKey}&s=${movieName}`;
  const url = `https://www.omdbapi.com/?${queryParams}`;

  const response = await fetch(url);
  const data = await response.json();
  // console.log("data on server side", data);
  res.status(200).json(data);
});

router.get("/id/:movieID", async function (req, res) {
  const movieID = req.params.movieID;
  // search for movie in mongodb by imdbID
  const movie = await Movie.find({imdbID: movieID})
  console.log("movie", movie);
  if(movie.length > 0){
    console.log("movie found in db");
    const response = {  
      Title: data.Title,
      Year: data.Year, 
      imdbID: data.imdbID,
      imdbRating: data.imdbRating,
      imdbVotes: data.imdbVotes,
      Type: data.Type,
      Poster: data.Poster,
      Plot: data.Plot,
       Response: "True"}
    res.status(200).json(movie[0]);
  } else {
    const queryParams = `apiKey=${apiKey}&i=${movieID}`;
    const url = `https://www.omdbapi.com/?${queryParams}&plot=full`;
    
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    // Add it to the database
    console.log("Adding movie to db");
    const newMovie = new Movie({
      Title: data.Title,
      Year: data.Year, 
      imdbID: data.imdbID,
      Type: data.Type,
      Poster: data.Poster,
      Plot: data.Plot
    })

    await newMovie.save();
    // console.log("data on server side", data);
    res.status(200).json(data);
  }
});


module.exports = router;


