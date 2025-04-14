
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Home Staging Company</h3>
            <p className="text-gray-400 mb-4">
              Professional home staging services to help sell your property faster and for a better price.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/vacant-home-staging" className="text-gray-400 hover:text-white">Vacant Home Staging</Link></li>
              <li><Link to="/services/occupied-home-staging" className="text-gray-400 hover:text-white">Occupied Home Staging</Link></li>
              <li><Link to="/services/consultation" className="text-gray-400 hover:text-white">Home Staging Consultation</Link></li>
              <li><Link to="/services/redesign" className="text-gray-400 hover:text-white">Interior Redesign</Link></li>
              <li><Link to="/services/virtual-staging" className="text-gray-400 hover:text-white">Virtual Staging</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-gray-400" />
                <span className="text-gray-400">info@homestagingcompany.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-gray-400" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Home Staging Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
