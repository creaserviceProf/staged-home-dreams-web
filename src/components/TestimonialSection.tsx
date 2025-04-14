
import React from 'react';
import { Quote } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const TestimonialSection = () => {
  const { language } = useTheme();
  
  const testimonials = [
    {
      id: 1,
      content: language === "en" 
        ? "Working with this staging company was the best decision we made when selling our home. It sold in just 5 days!" 
        : "Travailler avec cette entreprise de mise en scène a été la meilleure décision que nous ayons prise pour vendre notre maison. Elle s'est vendue en seulement 5 jours !",
      author: language === "en" ? "Sarah Johnson" : "Sarah Johnson",
      role: language === "en" ? "Homeowner" : "Propriétaire"
    },
    {
      id: 2,
      content: language === "en" 
        ? "As a realtor, I've seen firsthand how their staging transforms properties and attracts serious buyers quickly." 
        : "En tant qu'agent immobilier, j'ai vu de mes propres yeux comment leur mise en scène transforme les propriétés et attire rapidement des acheteurs sérieux.",
      author: language === "en" ? "Michael Chen" : "Michael Chen",
      role: language === "en" ? "Real Estate Agent" : "Agent Immobilier"
    },
    {
      id: 3,
      content: language === "en" 
        ? "Our investment property sat on the market for months. After staging, we had multiple offers within a week." 
        : "Notre propriété d'investissement est restée sur le marché pendant des mois. Après la mise en scène, nous avons reçu plusieurs offres en une semaine.",
      author: language === "en" ? "David Williams" : "David Williams",
      role: language === "en" ? "Property Investor" : "Investisseur Immobilier"
    }
  ];

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 dark:text-white">
          {language === "en" ? "What Our Clients Say" : "Ce Que Disent Nos Clients"}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white dark:bg-gray-800 p-6 rounded-md shadow-sm">
              <Quote className="text-gray-300 h-10 w-10 mb-4" />
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200">{testimonial.author}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
