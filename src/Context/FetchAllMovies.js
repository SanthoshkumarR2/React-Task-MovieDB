import { useState, useContext, createContext, useEffect } from "react";
import { API_KEY } from "../services/api";

const MovieContext = createContext();
const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=batman&page=2`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((mv) => setMovies(mv.Search));
  }, []);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {children}
    </MovieContext.Provider>
  );
};

// custom hook
const useData = () => useContext(MovieContext);

export { useData, MovieProvider };