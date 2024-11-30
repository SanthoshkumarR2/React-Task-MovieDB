import "./Styles/App.css";
import SearchData from "./components/SearchData";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import Favorites from "./pages/FavoritesPage";
import MovieDetail from "./pages/MovieDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/search" element={<SearchData />} />
        <Route path="/" element={<MovieList />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/searchData" element={<SearchData />} />
      </Routes>
    </div>
  );
}

export default App;