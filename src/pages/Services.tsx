
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 1,
    title: 'Vacant Home Staging',
    description: "Transform empty spaces into inviting homes that buyers can envision themselves living in. Our team will bring in furniture, artwork, and accessories to create a warm, welcoming atmosphere.",
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2940&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Occupied Home Staging',
    description: "We work with your existing furniture and belongings, rearranging and supplementing as needed to showcase your home's best features while maintaining functionality for daily living.",
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2874&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Home Staging Consultation',
    description: "Get expert advice on how to prepare your home for sale. We'll provide a detailed report with recommendations for repairs, updates, furniture arrangement, and styling.",
    image: 'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=2874&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Interior Redesign',
    description: "Not selling? Our redesign services help you fall in love with your home again by rearranging your existing furniture and accessories for a fresh new look.",
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Virtual Staging',
    description: "A cost-effective alternative to physical staging, our virtual staging service digitally adds furniture and decor to photos of your empty rooms for listings and marketing materials.",
    image: 'https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=2787&auto=format&fit=crop'
  }
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-serif font-bold mb-8 text-center">Our Services</h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            We offer a comprehensive range of home staging and design services to help you sell your property faster and for a better price.
          </p>
          
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="md:w-1/2">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="rounded-md shadow-md w-full h-auto object-cover"
                    style={{ maxHeight: '400px' }}
                  />
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-serif font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <Button className="bg-gray-800 hover:bg-gray-700">Learn More</Button>
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

export default Services;
