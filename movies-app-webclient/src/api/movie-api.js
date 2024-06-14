export const fetchMovies = async (searchQuery) => {
  console.log("searchQuery = ", searchQuery);
const url = `http://localhost:3001/movies/${searchQuery}`
const response = await fetch(url)
const data = await response.json()
return data
}

export const fetchMovieDetails = async (imdbID) => {
  const url = `http://localhost:3001/movie-details/${imdbID}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}