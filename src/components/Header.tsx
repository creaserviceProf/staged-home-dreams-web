
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="w-full">
      {/* Top bar with logo and social icons */}
      <div className="bg-gray-100 py-4 px-4 md:px-10 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-800">Home Staging Company</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="https://facebook.com" aria-label="Facebook" className="text-gray-600 hover:text-gray-900">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="text-gray-600 hover:text-gray-900">
              <Instagram size={18} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="text-gray-600 hover:text-gray-900">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Navigation menu */}
      <div className="bg-white py-3 px-4 md:px-10 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="uppercase text-sm font-medium text-gray-800 hover:text-gray-600">Home</Link>
            <Link to="/about" className="uppercase text-sm font-medium text-gray-800 hover:text-gray-600">About Us</Link>
            <Link to="/services" className="uppercase text-sm font-medium text-gray-800 hover:text-gray-600">Services</Link>
            <Link to="/portfolio" className="uppercase text-sm font-medium text-gray-800 hover:text-gray-600">Portfolio</Link>
            <Link to="/about-staging" className="uppercase text-sm font-medium text-gray-800 hover:text-gray-600">About Staging</Link>
            <Link to="/contact" className="uppercase text-sm font-medium text-gray-800 hover:text-gray-600">Contacts</Link>
          </nav>
          
          <div className="md:hidden flex-1">
            <Button variant="ghost" size="sm" className="text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </Button>
          </div>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="hidden md:block pl-8 pr-2 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <Search className="absolute left-2 top-1.5 h-4 w-4 text-gray-400 md:block hidden" />
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
