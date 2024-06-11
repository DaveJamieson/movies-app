import Movies from "./components/Movies";
import {Route, Routes} from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <h1> Movies App</h1>

      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
      </Routes>

    </div>
  );
}

export default App;
