import React, { useState } from 'react';
import { fetchMovies } from '../services/api';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (query) => {
    try {
      const response = await fetchMovies(query);
      if (response.data.Response === 'True') {
        setMovies(response.data.Search);
        setError('');
      } else {
        setError(response.data.Error);
        setMovies([]);
      }
    } catch (e) {
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {error && <p>{error}</p>}
      <div className="search-results">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
  
};

export default HomePage;
