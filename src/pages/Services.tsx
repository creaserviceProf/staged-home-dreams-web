
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { useTheme } from '../components/ThemeProvider';

const Services = () => {
  const { language } = useTheme();
  
  const services = [
    {
      id: 1,
      title: language === "en" ? 'Vacant Home Staging' : 'Mise en Scène de Maison Vacante',
      description: language === "en" 
        ? "Transform empty spaces into inviting homes that buyers can envision themselves living in. Our team will bring in furniture, artwork, and accessories to create a warm, welcoming atmosphere." 
        : "Transformez des espaces vides en maisons accueillantes où les acheteurs peuvent s'imaginer vivre. Notre équipe apportera des meubles, des œuvres d'art et des accessoires pour créer une atmosphère chaleureuse et accueillante.",
      image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2940&auto=format&fit=crop'
    },
    {
      id: 2,
      title: language === "en" ? 'Occupied Home Staging' : 'Mise en Scène de Maison Occupée',
      description: language === "en" 
        ? "We work with your existing furniture and belongings, rearranging and supplementing as needed to showcase your home's best features while maintaining functionality for daily living." 
        : "Nous travaillons avec vos meubles et effets personnels existants, en réarrangeant et en complétant si nécessaire pour mettre en valeur les meilleures caractéristiques de votre maison tout en maintenant la fonctionnalité pour la vie quotidienne.",
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2874&auto=format&fit=crop'
    },
    {
      id: 3,
      title: language === "en" ? 'Home Staging Consultation' : 'Consultation de Mise en Scène',
      description: language === "en" 
        ? "Get expert advice on how to prepare your home for sale. We'll provide a detailed report with recommendations for repairs, updates, furniture arrangement, and styling." 
        : "Obtenez des conseils d'experts sur la façon de préparer votre maison pour la vente. Nous vous fournirons un rapport détaillé avec des recommandations pour les réparations, les mises à jour, l'aménagement des meubles et le stylisme.",
      image: 'https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&w=2874&auto=format&fit=crop'
    },
    {
      id: 4,
      title: language === "en" ? 'Interior Redesign' : 'Réaménagement Intérieur',
      description: language === "en" 
        ? "Not selling? Our redesign services help you fall in love with your home again by rearranging your existing furniture and accessories for a fresh new look." 
        : "Vous ne vendez pas ? Nos services de réaménagement vous aident à retomber amoureux de votre maison en réarrangeant vos meubles et accessoires existants pour un nouveau look frais.",
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop'
    },
    {
      id: 5,
      title: language === "en" ? 'Virtual Staging' : 'Mise en Scène Virtuelle',
      description: language === "en" 
        ? "A cost-effective alternative to physical staging, our virtual staging service digitally adds furniture and decor to photos of your empty rooms for listings and marketing materials." 
        : "Une alternative économique à la mise en scène physique, notre service de mise en scène virtuelle ajoute numériquement des meubles et de la décoration aux photos de vos pièces vides pour les annonces et les supports marketing.",
      image: 'https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=2787&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-serif font-bold mb-8 text-center dark:text-white">
            {language === "en" ? 'Our Services' : 'Nos Services'}
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12 dark:text-gray-300">
            {language === "en" 
              ? 'We offer a comprehensive range of home staging and design services to help you sell your property faster and for a better price.' 
              : 'Nous offrons une gamme complète de services de mise en scène et de design pour vous aider à vendre votre propriété plus rapidement et à un meilleur prix.'}
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
                  <h2 className="text-3xl font-serif font-bold mb-4 dark:text-white">{service.title}</h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">{service.description}</p>
                  <Button className="bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600">
                    {language === "en" ? 'Learn More' : 'En Savoir Plus'}
                  </Button>
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
