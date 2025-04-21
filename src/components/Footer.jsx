import { Link } from 'react-router-dom';
import logo from '../assets/Shreendha Architects Logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Shreendha Architects Logo" className="h-10 w-auto" />
            </Link>
            <p className="text-gray-400 text-sm mt-2">
              Transforming spaces into architectural masterpieces since 2017. We blend aesthetics with functionality.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-white transition duration-300">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Architectural Design</li>
              <li className="text-gray-400">Interior Design</li>
              <li className="text-gray-400">Urban Planning</li>
              <li className="text-gray-400">Landscape Architecture</li>
              <li className="text-gray-400">Sustainable Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <address className="not-italic text-gray-400">
              <p className="mb-2">First floor, Bhagyalakshmi Complex,</p>
              <p className="mb-2">Opposite Ramesh Bhavan, Hemanth Nagar,</p>
              <p className="mb-2">Bengeri Extension, Keshwapur,</p>
              <p className="mb-2">Hubballi, Karnataka 580023</p>
              <p className="mb-2">shreendaarchitects@gmail.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Shreendha Architects. All rights reserved. Est. 2017</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 