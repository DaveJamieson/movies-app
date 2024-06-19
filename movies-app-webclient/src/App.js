import Movies from "./components/Movies";
import { Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
