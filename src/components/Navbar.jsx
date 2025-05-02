import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { signOut as firebaseSignOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import logo from '../assets/Shreenda Architects Logo.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { currentUser, refreshAuthState, signOut } = useAuth();
  const navigate = useNavigate();
  const profileMenuRef = useRef(null);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Navbar detected auth state change:", user ? "logged in" : "logged out");
    });
    
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isProfileMenuOpen) setIsProfileMenuOpen(false);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Close profile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setIsProfileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileMenuRef]);

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
            
            {currentUser ? (
              <div className="relative ml-4" ref={profileMenuRef}>
                <button
                  onClick={toggleProfileMenu}
                  className="flex items-center space-x-2 focus:outline-none"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">{currentUser.displayName || 'User'}</span>
                </button>
                
                {/* Profile Dropdown Menu */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-50 dropdown-menu border border-gray-100 animate-fade-in-down">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-900">
                        {currentUser.displayName || 'User Profile'}
                      </p>
                      <p className="text-xs text-gray-500 mt-1 truncate">
                        {currentUser.email}
                      </p>
                    </div>
                    
                    {/* Update admin email check to include gauravshidling@gmail.com */}
                    {(currentUser.email === 'admin@shreenda.com' || currentUser.email === 'gauravshidling@gmail.com') && (
                      <Link 
                        to="/dashboard" 
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={() => setIsProfileMenuOpen(false)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        Dashboard
                      </Link>
                    )}
                    
                    {/* Sign out button using proper button element */}
                    <button
                      onClick={handleSignOut}
                      className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V7.414l-5-5H3zm6 7a1 1 0 112 0v3a1 1 0 11-2 0v-3zm-3 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm7 0a1 1 0 011-1h.01a1 1 0 110 2H14a1 1 0 01-1-1zm-1-5a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V7a1 1 0 00-1-1h-.01z" clipRule="evenodd" />
                      </svg>
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <NavLink to="/login" className="ml-4 px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                Login
              </NavLink>
            )}
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-3 pt-3 border-t border-gray-200">
              <div className="flex flex-col space-y-2 pb-3">
                <NavLink to="/" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                <NavLink to="/about" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
                <NavLink to="/projects" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
                <NavLink to="/contact" className={navLinkClass} onClick={() => setIsMenuOpen(false)}>Contact Us</NavLink>
                
                {currentUser ? (
                  <div className="pt-2 mt-2 border-t border-gray-200">
                    <div className="px-3 py-2 text-sm font-medium text-gray-700 flex items-center">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center text-white mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="truncate">
                        {currentUser.displayName || currentUser.email}
                      </span>
                    </div>
                    
                    {/* Update admin email check in mobile view as well */}
                    {(currentUser.email === 'admin@shreenda.com' || currentUser.email === 'gauravshidling@gmail.com') && (
                      <NavLink 
                        to="/dashboard" 
                        className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        Dashboard
                      </NavLink>
                    )}
                    
                    {/* Sign out button using proper button element */}
                    <button
                      onClick={handleSignOut}
                      className="flex items-center w-full text-left px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md mt-1 cursor-pointer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V7.414l-5-5H3zm6 7a1 1 0 112 0v3a1 1 0 11-2 0v-3zm-3 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm7 0a1 1 0 011-1h.01a1 1 0 110 2H14a1 1 0 01-1-1zm-1-5a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V7a1 1 0 00-1-1h-.01z" clipRule="evenodd" />
                      </svg>
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="pt-2 mt-2 border-t border-gray-200">
                    <NavLink 
                      to="/login" 
                      className="flex items-center px-3 py-2 text-sm font-medium bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-md my-2 hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-sm" 
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm7 1a1 1 0 00-1 1v1a1 1 0 002 0V5a1 1 0 00-1-1zm4 0a1 1 0 00-1 1v1a1 1 0 102 0V5a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      Login
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          )}
          
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
      </div>
    </nav>
  );
};

export default Navbar; 