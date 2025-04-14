
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { useTheme } from '../components/ThemeProvider';

const Portfolio = () => {
  const { language } = useTheme();
  
  const categories = language === "en" 
    ? ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Bathroom', 'Office']
    : ['Tous', 'Salon', 'Chambre', 'Cuisine', 'Salle de Bain', 'Bureau'];

  const getCategoryKey = (displayName: string) => {
    if (language === "en") return displayName;
    
    // Map French category names back to English keys
    const categoryMap: Record<string, string> = {
      'Tous': 'All',
      'Salon': 'Living Room',
      'Chambre': 'Bedroom',
      'Cuisine': 'Kitchen',
      'Salle de Bain': 'Bathroom',
      'Bureau': 'Office'
    };
    
    return categoryMap[displayName] || displayName;
  };

  const getTranslatedCategory = (englishCategory: string) => {
    if (language === "en") return englishCategory;
    
    // Map English category names to French
    const categoryMap: Record<string, string> = {
      'All': 'Tous',
      'Living Room': 'Salon',
      'Bedroom': 'Chambre',
      'Kitchen': 'Cuisine',
      'Bathroom': 'Salle de Bain',
      'Office': 'Bureau'
    };
    
    return categoryMap[englishCategory] || englishCategory;
  };

  const portfolioItems = [
    {
      id: 1,
      title: language === "en" ? 'Modern Living Room Staging' : 'Mise en Scène de Salon Moderne',
      category: 'Living Room',
      image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=2858&auto=format&fit=crop'
    },
    {
      id: 2,
      title: language === "en" ? 'Contemporary Master Bedroom' : 'Chambre Principale Contemporaine',
      category: 'Bedroom',
      image: 'https://images.unsplash.com/photo-1617098900591-3f90928e8c54?q=80&w=2787&auto=format&fit=crop'
    },
    {
      id: 3,
      title: language === "en" ? 'Luxury Kitchen Design' : 'Design de Cuisine de Luxe',
      category: 'Kitchen',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2832&auto=format&fit=crop'
    },
    {
      id: 4,
      title: language === "en" ? 'Minimalist Bathroom' : 'Salle de Bain Minimaliste',
      category: 'Bathroom',
      image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2940&auto=format&fit=crop'
    },
    {
      id: 5,
      title: language === "en" ? 'Home Office Setup' : 'Aménagement de Bureau à Domicile',
      category: 'Office',
      image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2940&auto=format&fit=crop'
    },
    {
      id: 6,
      title: language === "en" ? 'Cozy Family Room' : 'Salle Familiale Confortable',
      category: 'Living Room',
      image: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?q=80&w=2940&auto=format&fit=crop'
    },
    {
      id: 7,
      title: language === "en" ? 'Guest Bedroom Staging' : 'Mise en Scène de Chambre d\'Amis',
      category: 'Bedroom',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2940&auto=format&fit=crop'
    },
    {
      id: 8,
      title: language === "en" ? 'Open Concept Kitchen' : 'Cuisine à Concept Ouvert',
      category: 'Kitchen',
      image: 'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=2832&auto=format&fit=crop'
    }
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]);
  
  const filteredItems = activeCategory === categories[0]
    ? portfolioItems 
    : portfolioItems.filter(item => getTranslatedCategory(item.category) === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-serif font-bold mb-8 text-center dark:text-white">
            {language === "en" ? "Our Portfolio" : "Notre Portfolio"}
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12 dark:text-gray-300">
            {language === "en"
              ? "Browse our collection of staged homes and see how we transform properties to attract buyers and maximize value."
              : "Parcourez notre collection de maisons mises en scène et découvrez comment nous transformons les propriétés pour attirer les acheteurs et maximiser la valeur."}
          </p>
          
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={activeCategory === category 
                    ? "bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600" 
                    : "border-gray-300 dark:border-gray-600 dark:text-gray-300"}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <div key={item.id} className="group overflow-hidden rounded-md shadow-md">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-800 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
                      {language === "en" ? "View Project" : "Voir le Projet"}
                    </Button>
                  </div>
                </div>
                <div className="p-4 dark:bg-gray-800">
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{getTranslatedCategory(item.category)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
