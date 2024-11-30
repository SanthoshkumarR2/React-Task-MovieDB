import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import { MovieProvider } from './Context/FetchAllMovies';
import { SearchProvider } from './Context/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MovieProvider>
      <SearchProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </SearchProvider>
    </MovieProvider>
  </React.StrictMode>
);

