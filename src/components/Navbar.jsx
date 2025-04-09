import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../styles/Navbar.css';
import logo from '../assets/logo-darks.webp';

const Navbar = ({ isAuthenticated, handleLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Logo" />
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={closeMenu} className="home-link"><span>Home</span></Link></li>
  <li><Link to="/about" onClick={closeMenu} className="about-link"><span>About</span></Link></li>
  {/* <li><Link to="/todo" onClick={closeMenu} className="todo-link"><span>To-Do</span></Link></li> */}
          
          {!isAuthenticated ? (
            <>
             <li><Link to="/login" onClick={closeMenu} className="login-link"><span>Login</span></Link></li>
             <li><Link to="/signup" onClick={closeMenu} className="signup-link"><span>Signup</span></Link></li>
            </>
          ) : (
            <li>
              <button className="logout-btn" onClick={() => { handleLogout(); closeMenu(); }}>
              <span>Logout</span>
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
