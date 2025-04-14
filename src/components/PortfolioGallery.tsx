
import React from 'react';

const portfolioItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2832&auto=format&fit=crop',
    title: 'Modern Kitchen',
    category: 'Kitchen'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1617098900591-3f90928e8c54?q=80&w=2787&auto=format&fit=crop',
    title: 'Cozy Bedroom',
    category: 'Bedroom'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=2858&auto=format&fit=crop',
    title: 'Elegant Living Room',
    category: 'Living Room'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=2940&auto=format&fit=crop',
    title: 'Bright Bathroom',
    category: 'Bathroom'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2940&auto=format&fit=crop',
    title: 'Home Office',
    category: 'Office'
  }
];

const PortfolioGallery = () => {
  return (
    <div className="bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-5 gap-2">
          {portfolioItems.map((item) => (
            <div key={item.id} className="overflow-hidden">
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-24 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioGallery;
