function createOmdbLikeResponse (data){
  return {
      Title: data[0].Title,
      Year: data[0].Year,
      imdbID: data[0].imdbID,
      Type: data[0].Type,
      Poster: data[0].Poster,
      Plot: data[0].Plot, 
      Rated: data[0].Rated,
      Released: data[0].Released,
      Runtime: data[0].Runtime,
      Genre: data[0].Genre,
      Director: data[0].Director,
      Writer: data[0].Writer,
      Actors: data[0].Actors,
      Language: data[0].Language,
      Country: data[0].Country,
      Awards: data[0].Awards,
      BoxOffice: data[0].BoxOffice,
      Metascore: data[0].Metascore,
      imdbRating: data[0].imdbRating,
      imdbVotes: data[0].imdbVotes,
      Response: "True",
  }
}

function createNewMovieInDatabase (movieData){
  return {
    Title: movieData.Title,
    Year: movieData.Year,
    imdbID: movieData.imdbID,
    Type: movieData.Type,
    Poster: movieData.Poster,
    Plot: movieData.Plot || "", 
    Rated: movieData.Rated || "",
    Released: movieData.Released || "",
    Runtime: movieData.Runtime || "",
    Genre: movieData.Genre || "",
    Director: movieData.Director || "",
    Writer: movieData.Writer || "",
    Actors: movieData.Actors || "",
    Language: movieData.Language || "",
    Country: movieData.Country || "",
    Awards: movieData.Awards || "",
    BoxOffice: movieData.BoxOffice || "",
    Metascore: movieData.Metascore || "",
    imdbRating: movieData.imdbRating || "",
    imdbVotes: movieData.imdbVotes || "",
  }
}


const Utils = {
  createOmdbLikeResponse,
  createNewMovieInDatabase,
}

module.exports = Utils;