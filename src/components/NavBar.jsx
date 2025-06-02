import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

function NavBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary px-3">
      <Container fluid>
        <Navbar.Brand href="#" className="fw-bold fs-3 text-primary">
          MovieHub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Form className="d-flex" role="search" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search for movies..."
              className="me-2"
              aria-label="Search"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <Button type="submit" variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
