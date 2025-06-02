import React, { useEffect, useState } from 'react';
import { getAllMovies } from '../service/movieService';
import MovieList from './MovieList';
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getAllMovies();
        setMovies(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading movies: {error.message}</div>;

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
