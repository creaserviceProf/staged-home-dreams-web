
import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Working with this staging company was the best decision we made when selling our home. It sold in just 5 days!",
    author: "Sarah Johnson",
    role: "Homeowner"
  },
  {
    id: 2,
    content: "As a realtor, I've seen firsthand how their staging transforms properties and attracts serious buyers quickly.",
    author: "Michael Chen",
    role: "Real Estate Agent"
  },
  {
    id: 3,
    content: "Our investment property sat on the market for months. After staging, we had multiple offers within a week.",
    author: "David Williams",
    role: "Property Investor"
  }
];

const TestimonialSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">What Our Clients Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-md shadow-sm">
              <Quote className="text-gray-300 h-10 w-10 mb-4" />
              <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.author}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
