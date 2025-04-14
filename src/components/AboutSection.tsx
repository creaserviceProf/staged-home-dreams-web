
import React from 'react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1602872030490-4a484a7b3ba6?q=80&w=2940&auto=format&fit=crop" 
              alt="Interior designer working" 
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">About Our Staging Services</h2>
            <p className="text-gray-700 mb-4">
              We are a professional home staging company dedicated to transforming vacant or occupied properties into appealing, 
              marketable homes that sell faster and for a higher price.
            </p>
            <p className="text-gray-700 mb-6">
              Our team of experienced designers understands what buyers are looking for and how to highlight your property's 
              best features while minimizing any flaws. We use a carefully curated collection of furniture, artwork, and accessories 
              to create an emotional connection with potential buyers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gray-800 hover:bg-gray-700">Our Process</Button>
              <Button variant="outline" className="border-gray-800 text-gray-800 hover:bg-gray-100">
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
