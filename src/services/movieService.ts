// src/services/movieService.ts
import axios from 'axios';
import type { Movie } from '../types/movie';

const API_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

interface fetchMoviesResponse {
  results: Movie[];
}

export default function fetchMovies(query: string) {  
  return axios.get<fetchMoviesResponse>('https://api.themoviedb.org/3/search/movie', {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
    params: { query },
  });
};
