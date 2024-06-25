const API_URL = process.env.NODE_ENV === "development" ? "http://localhost:3001" : "https://movies-app-j7xn.onrender.com";

export const fetchMovies = async (searchQuery) => {
  console.log("searchQuery = ", searchQuery);
  const url = `${API_URL}/movies/${searchQuery}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export const fetchMovieDetails = async (imdbID) => {
  const url = `${API_URL}/movies/id/${imdbID}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// New function to log searches
export const logSearch = async (imdbID, movieName) => {
  const url = `${API_URL}/search-history/log`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ imdb_ID: imdbID, movie_name: movieName })
    });
    if (!response.ok) {
      throw new Error('Failed to log search');
    }
  } catch (err) {
    console.error('Failed to log search', err);
  }
}

export const fetchSearchHistory = async () => {
    const url = `${API_URL}/search-history`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch search history');
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
        return [];
    }
};
