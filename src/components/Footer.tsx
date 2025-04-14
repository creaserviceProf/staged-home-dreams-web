
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Footer = () => {
  const { language } = useTheme();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              {language === "en" ? "Home Staging Company" : "Entreprise de Home Staging"}
            </h3>
            <p className="text-gray-400 mb-4">
              {language === "en"
                ? "Professional home staging services to help sell your property faster and for a better price."
                : "Services professionnels de home staging pour vous aider à vendre votre propriété plus rapidement et à un meilleur prix."}
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
            <h3 className="text-lg font-bold mb-4">
              {language === "en" ? "Quick Links" : "Liens Rapides"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  {language === "en" ? "Home" : "Accueil"}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  {language === "en" ? "About Us" : "À Propos"}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white">
                  {language === "en" ? "Services" : "Services"}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-white">
                  {language === "en" ? "Portfolio" : "Portfolio"}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  {language === "en" ? "Contact" : "Contact"}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">
              {language === "en" ? "Services" : "Services"}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/vacant-home-staging" className="text-gray-400 hover:text-white">
                  {language === "en" ? "Vacant Home Staging" : "Mise en Scène de Maison Vacante"}
                </Link>
              </li>
              <li>
                <Link to="/services/occupied-home-staging" className="text-gray-400 hover:text-white">
                  {language === "en" ? "Occupied Home Staging" : "Mise en Scène de Maison Occupée"}
                </Link>
              </li>
              <li>
                <Link to="/services/consultation" className="text-gray-400 hover:text-white">
                  {language === "en" ? "Home Staging Consultation" : "Consultation de Mise en Scène"}
                </Link>
              </li>
              <li>
                <Link to="/services/redesign" className="text-gray-400 hover:text-white">
                  {language === "en" ? "Interior Redesign" : "Réaménagement Intérieur"}
                </Link>
              </li>
              <li>
                <Link to="/services/virtual-staging" className="text-gray-400 hover:text-white">
                  {language === "en" ? "Virtual Staging" : "Mise en Scène Virtuelle"}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">
              {language === "en" ? "Contact Us" : "Contactez-Nous"}
            </h3>
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
          <p>
            &copy; {new Date().getFullYear()} 
            {language === "en" 
              ? " Home Staging Company. All rights reserved." 
              : " Entreprise de Home Staging. Tous droits réservés."}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
