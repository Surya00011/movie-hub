import React, { useEffect, useState } from 'react';
import { getAllMovies, getMovieByTitle } from '../service/movieService';
import MovieList from './MovieList';
import NavBar from './NavBar';

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

  const handleSearch = async (query) => {
    if (!query) return;

    setLoading(true);
    setError(null);
    try {
      const data = await getMovieByTitle(query);
      const resultArray = Array.isArray(data) ? data : [data];
      setMovies(resultArray);
    } catch (err) {
      setError(err);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar onSearch={handleSearch} /> {/*display nav on top of movie list*/}
      <div className="container my-4">
        {loading && <div>Loading...</div>}
        {error && <div className="text-danger">Error: {error.message}</div>}
        {!loading && !error && movies.length === 0 && (
          <div>No movies found.</div>
        )}
        {!loading && !error && movies.length > 0 && (
          <MovieList movies={movies} /> 
        )} {/*sending fetched movies list as props to MovieList component*/}
      </div>
    </>
  );
};

export default Home;
