import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComp = () => {
  return (
    <Navbar expand="md" className="m-0 p-0 navbar">
      <div className="container">
        <Link to="/" className="nav-link">
          <Navbar.Brand style={{ color: '#4787f4' }}>
            <i class="fas fa-cloud-moon-rain fa-2x"></i>
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="bg-info mr-2"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/" className="nav-link ml-2" style={{ color: '#56810c' }}>
              Home
            </Link>
            <Link
              to="/forecast"
              className="nav-link ml-2"
              style={{ color: '#56810c' }}
            >
              Forecast
            </Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarComp;
