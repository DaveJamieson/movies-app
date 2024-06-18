const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  Title: String,
  Year: String,
  imdbID: String,
  Type: String,
  Poster: String,
  Plot: String,
  Rated: String,
  Released: String,
  Runtime: String,
  Type: String,
  Genre: String,
  Director: String,
  Writer: String,
  Actors: String,
  Language: String,
  Country: String,
  Awards: String,
  BoxOffice: String,
  Metascore: String,
  imdbRating: String,
  imdbVotes: String,
  Response: String,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
