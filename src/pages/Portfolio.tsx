
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Living Room', 'Bedroom', 'Kitchen', 'Bathroom', 'Office'];

const portfolioItems = [
  {
    id: 1,
    title: 'Modern Living Room Staging',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=2858&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Contemporary Master Bedroom',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1617098900591-3f90928e8c54?q=80&w=2787&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Luxury Kitchen Design',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2832&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Minimalist Bathroom',
    category: 'Bathroom',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Home Office Setup',
    category: 'Office',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Cozy Family Room',
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: 7,
    title: 'Guest Bedroom Staging',
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: 8,
    title: 'Open Concept Kitchen',
    category: 'Kitchen',
    image: 'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&w=2832&auto=format&fit=crop'
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-serif font-bold mb-8 text-center">Our Portfolio</h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            Browse our collection of staged homes and see how we transform properties to attract buyers and maximize value.
          </p>
          
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  className={activeCategory === category ? "bg-gray-800 hover:bg-gray-700" : "border-gray-300"}
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
                    <Button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-800 hover:bg-gray-100">
                      View Project
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.category}</p>
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
