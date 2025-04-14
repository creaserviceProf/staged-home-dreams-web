import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Facebook, Instagram, Twitter, Moon, Sun, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useTheme } from './ThemeProvider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { theme, toggleTheme, language, toggleLanguage } = useTheme();
  
  return (
    <header className="w-full">
      {/* Top bar with logo and social icons */}
      <div className="bg-maroon py-4 px-4 md:px-10 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 text-gray-800 dark:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">Home Staging Company</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" aria-label="Change language">
                  <Globe size={18} />
                  <span className="ml-1 text-xs font-medium">{language.toUpperCase()}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => language !== "en" && toggleLanguage()}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => language !== "fr" && toggleLanguage()}>
                  Français
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Dark Mode Toggle */}
            <div className="flex items-center space-x-2">
              <Sun size={16} className="text-gray-600 dark:text-gray-300" />
              <Switch 
                checked={theme === "dark"}
                onCheckedChange={toggleTheme}
                aria-label="Toggle dark mode"
              />
              <Moon size={16} className="text-gray-600 dark:text-gray-300" />
            </div>
            
            <a href="https://facebook.com" aria-label="Facebook" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Instagram size={18} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Navigation menu */}
      <div className="bg-green py-3 px-4 md:px-10 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="uppercase text-sm font-medium text-green hover:text-maroon">
              {language === "en" ? "Home" : "Accueil"}
            </Link>
            <Link to="/about" className="uppercase text-sm font-medium text-green hover:text-maroon">
              {language === "en" ? "About Us" : "À propos"}
            </Link>
            <Link to="/services" className="uppercase text-sm font-medium text-green hover:text-maroon">
              {language === "en" ? "Services" : "Services"}
            </Link>
            <Link to="/portfolio" className="uppercase text-sm font-medium text-green hover:text-maroon">
              {language === "en" ? "Portfolio" : "Portfolio"}
            </Link>
            <Link to="/about-staging" className="uppercase text-sm font-medium text-green hover:text-maroon">
              {language === "en" ? "About Staging" : "À propos du Staging"}
            </Link>
            <Link to="/contact" className="uppercase text-sm font-medium text-green hover:text-maroon">
              {language === "en" ? "Contacts" : "Contact"}
            </Link>
          </nav>
          
          <div className="md:hidden flex-1">
            <Button variant="ghost" size="sm" className="text-gray-800 dark:text-gray-200">
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
              placeholder={language === "en" ? "Search" : "Rechercher"}
              className="hidden md:block pl-8 pr-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 dark:bg-gray-800 dark:text-gray-200"
            />
            <Search className="absolute left-2 top-1.5 h-4 w-4 text-gray-400 md:block hidden" />
            <Button variant="ghost" size="icon" className="md:hidden text-gray-800 dark:text-gray-200">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
