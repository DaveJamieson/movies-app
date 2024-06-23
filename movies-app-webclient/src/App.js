import Movies from "./components/Movies";
import { Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Header from "./components/Header";
import SearchHistory from "./components/SearchHistory";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        <Route path="/search-history" element={<SearchHistory />} />
      </Routes>
    </div>
  );
}

export default App;
