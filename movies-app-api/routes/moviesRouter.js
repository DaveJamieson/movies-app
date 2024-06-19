const express = require("express");
const validateMovie = require("../middlewares/validateMovie");
const Movie = require("../models/movie");
const router = express.Router();
const apiKey = process.env.API_KEY;
const Utils = require("../utils/apiUtils");

router.get("/", async function (req, res) {
  res.send("Please enter a movie name");
});

router.get("/:movieName", validateMovie, async function (req, res) {
  const movieName = req.params.movieName;
  const queryParams = `apiKey=${apiKey}&s=${movieName}`;
  const url = `https://www.omdbapi.com/?${queryParams}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.Response === "True" && data.Search) {
    const savedMovies = await Promise.all(
      data.Search.map(async (movie) => {
        const movieID = movie.imdbID;
        const existingMovie = await Movie.findOne({ imdbID: movieID });
        if (!existingMovie) {
          const movieDetailsUrl = `https://www.omdbapi.com/?apiKey=${apiKey}&i=${movieID}&plot=full`;
          const movieDetailsResponse = await fetch(movieDetailsUrl);
          const movieDetails = await movieDetailsResponse.json();
          if (movieDetails.Response === "True") {
            const newMovie = new Movie(
              Utils.createNewMovieInDatabase(movieDetails)
            );
            await newMovie.save();
            console.log("Saved new movie to the database: ", newMovie);
            return newMovie;
          }
        }
        return existingMovie;
      })
    );

    res.status(200).json(data);
  }
});

router.get("/id/:movieID", async function (req, res) {
  const movieID = req.params.movieID;
  // search for movie in mongodb by imdbID
  const movie = await Movie.find({ imdbID: movieID });
  console.log("In router.get/id/:movieID searching for this movie: ", movie);
  if (movie.length > 0) {
    console.log("movie found in db");
    const response = Utils.createOmdbLikeResponse(movie);
    res.status(200).json(response);
  } else {
    const queryParams = `apiKey=${apiKey}&i=${movieID}`;
    const url = `https://www.omdbapi.com/?${queryParams}&plot=full`;

    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    // Add it to the database
    console.log("Adding movie to db");
    const newMovie = new Movie(Utils.createNewMovieInDatabase(data));

    await newMovie.save();
    // console.log("data on server side", data);
    res.status(200).json(data);
  }
});

module.exports = router;
