const API_URL = process.env.NODE_ENV === "development" ? "http://localhost:3001" : "https://movies-app-j7xn.onrender.com";

export const fetchMovies = async (searchQuery) => {
  console.log("searchQuery = ", searchQuery);
const url = `${API_URL}/movies/${searchQuery}`
const response = await fetch(url)
const data = await response.json()
return data
}

export const fetchMovieDetails = async (imdbID) => {
  const url = `${API_URL}/movies/id/${imdbID}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}