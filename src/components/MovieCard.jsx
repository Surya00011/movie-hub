import React, { useState } from "react";
import { Card, Button, Badge, ListGroup, Collapse } from "react-bootstrap";

function MovieCard({ movie }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <div className="d-flex align-items-center">
          <img
            src={movie.Poster}           // many posters are not available, so i used fallback logic here sir
            alt={movie.title}
            onError={(e) => {
              if (movie.Images && movie.Images.length > 0) {
                e.target.onerror = null;
                e.target.src = movie.Images[0];
              }
            }}
            style={{
              width: "120px",
              height: "auto",
              objectFit: "cover",
              marginRight: "1rem",
              borderRadius: "5px",
            }}
          />
          <div>
            <Card.Title>
              {movie.title} ({movie.year}){" "}
              <Badge bg="info" className="ms-1">
                {movie.rated}
              </Badge>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {movie.genre}
            </Card.Subtitle>

            <Button
              variant="primary"
              size="sm"
              onClick={() => setShowDetails(!showDetails)}
              aria-controls="movie-details-collapse"
              aria-expanded={showDetails}
            >
              {showDetails ? "Hide Details" : "Show Details"}
            </Button>
          </div>
        </div>

        <Collapse in={showDetails}>
          <div id="movie-details-collapse" className="mt-3">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong>Director:</strong> {movie.director}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Writer:</strong> {movie.writer}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Actors:</strong> {movie.actors}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Language:</strong> {movie.language}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Country:</strong> {movie.Country}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Awards:</strong> {movie.Awards}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>IMDB Rating:</strong> ⭐ {movie.imdbRating} (
                {movie.imdbVotes} votes)
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Plot:</strong> {movie.plot}
              </ListGroup.Item>
            </ListGroup>

            {movie.Images && movie.Images.length > 0 && (
              <div
                className="d-flex overflow-auto mt-3"
                style={{ gap: "10px" }}
              >
                {movie.Images.map((imgUrl, idx) => (
                  <img
                    key={idx}
                    src={imgUrl}
                    alt={"Movie Image"}
                    style={{
                      width: "150px",
                      height: "auto",
                      borderRadius: "5px",
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
