import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/Shreenda Architects Logo.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClass = ({ isActive }) => 
    `px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${
      isActive 
        ? 'text-accent font-bold' 
        : 'text-gray-700 hover:text-accent'
    }`;

  return (
    <nav className="bg-white shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Shreenda Architects Logo" className="h-10 w-auto" />
            <span className="text-xl font-heading font-bold text-primary">Shreenda Architects</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
            <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink>
          </div>

          {/* Mobile menu button */}
          <button 
            type="button" 
            className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pb-3">
              <NavLink to="/" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
              <NavLink to="/about" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
              <NavLink to="/projects" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
              <NavLink to="/contact" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Contact Us</NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 