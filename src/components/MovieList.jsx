import React from 'react';
import Container from 'react-bootstrap/Container';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  return (
    <Container className="mt-4">
      {movies.length === 0 ? (
        <p>No movies found</p>
      ) : (
        movies.map((movie, idx) => <MovieCard key={idx} movie={movie} />)
      )}
    </Container> 
  );{ /* Displaying the list of movies using MovieCard component */}
}

export default MovieList;
