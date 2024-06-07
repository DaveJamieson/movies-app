export const fetchMovies = async (searchQuery) => {
const apiKey = "d9c704de"
const queryParams = `apiKey=${apiKey}&s=${searchQuery}`
const url = `https://www.omdbapi.com/?${queryParams}`

const response = await fetch(url)
const data = await response.json()
return data
}