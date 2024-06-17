const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  Title:String,
  Year: String,
  imdbID: String,
  Type: String,
  Poster:String,
  Plot: String


  // Add extra info categories here
})

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
