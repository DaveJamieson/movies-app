export const fetchMovies = async (searchQuery) => {
const apiKey = "721ba629"
const queryParams = `apiKey=${apiKey}&s=${searchQuery}`
const url = `https://www.omdbapi.com/?${queryParams}`

const response = await fetch(url)
const data = await response.json()
return data
}