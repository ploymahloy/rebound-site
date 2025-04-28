import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>Rebound Industrial Maintenance</Link>
        </div>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/services" onClick={closeMenu}>Services</Link>
          <Link to="/projects" onClick={closeMenu}>Projects</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/applications" onClick={closeMenu}>Applications</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;