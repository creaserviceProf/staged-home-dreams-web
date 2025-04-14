
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useTheme();
  
  const slides = [
    {
      id: 1,
      image: "/lovable-uploads/5780d895-86f6-4791-8f09-c1e2f21ac7f4.png",
      title: language === "en" ? "Transform Your Space" : "Transformez Votre Espace",
      subtitle: language === "en" 
        ? "Professional staging to showcase your property's full potential" 
        : "Mise en scène professionnelle pour révéler tout le potentiel de votre propriété"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop",
      title: language === "en" ? "Sell Faster" : "Vendez Plus Rapidement",
      subtitle: language === "en" 
        ? "Beautiful spaces that appeal to potential buyers" 
        : "Des espaces magnifiques qui attirent les acheteurs potentiels"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop",
      title: language === "en" ? "Maximize Value" : "Maximisez la Valeur",
      subtitle: language === "en" 
        ? "Strategic staging to help you get the best price for your property" 
        : "Mise en scène stratégique pour obtenir le meilleur prix pour votre propriété"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ zIndex: index === currentSlide ? 10 : 0 }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end">
            <div className="p-8 text-white max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-2">{slide.title}</h2>
              <p className="text-lg md:text-xl">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            aria-label={language === "en" ? `Go to slide ${index + 1}` : `Aller à la diapositive ${index + 1}`}
          />
        ))}
      </div>

      <Button
        onClick={prevSlide}
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full"
        aria-label={language === "en" ? "Previous slide" : "Diapositive précédente"}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        onClick={nextSlide}
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-30 hover:bg-opacity-50 text-white rounded-full"
        aria-label={language === "en" ? "Next slide" : "Diapositive suivante"}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>
    </div>
  );
};

export default HeroSlider;
