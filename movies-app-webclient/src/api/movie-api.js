export const fetchMovies = async (searchQuery) => {
const url = `http://localhost:3001/movies/${searchQuery}`

const response = await fetch(url)
const data = await response.json()
return data
}