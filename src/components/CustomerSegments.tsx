
import React from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';

interface SegmentProps {
  title: string;
  tagline: string;
  description: string;
}

const CustomerSegments = () => {
  const { language } = useTheme();
  
  const Segment: React.FC<SegmentProps> = ({ title, tagline, description }) => {
    return (
      <div className="bg-white dark:bg-gray-800 p-6 rounded-sm shadow-sm flex flex-col items-center text-center">
        <h3 className="text-2xl font-serif font-semibold mb-3">{title}</h3>
        <p className="font-medium text-gray-700 dark:text-gray-300 mb-4">{tagline}</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">{description}</p>
        <Button className="bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600">
          {language === "en" ? "Learn More" : "En Savoir Plus"}
        </Button>
      </div>
    );
  };

  const segments = [
    {
      title: language === "en" ? "Homeowners" : "Propriétaires",
      tagline: language === "en" 
        ? "Want to sell your vacant home for more money?" 
        : "Vous voulez vendre votre maison vacante pour plus d'argent ?",
      description: language === "en" 
        ? "Our professional staging services will transform your empty property into an appealing home that buyers can envision themselves living in." 
        : "Nos services de mise en scène professionnels transformeront votre propriété vide en une maison attrayante où les acheteurs pourront s'imaginer vivre."
    },
    {
      title: language === "en" ? "Investors" : "Investisseurs",
      tagline: language === "en" 
        ? "Want to turn your inventory faster?" 
        : "Vous voulez écouler votre inventaire plus rapidement ?",
      description: language === "en" 
        ? "Our staging solutions help showcase your investment properties in the best light to attract serious buyers and accelerate sales." 
        : "Nos solutions de mise en scène aident à présenter vos propriétés d'investissement sous leur meilleur jour pour attirer des acheteurs sérieux et accélérer les ventes."
    },
    {
      title: language === "en" ? "Realtors" : "Agents Immobiliers",
      tagline: language === "en" 
        ? "Want to sell your vacant listing easier and faster?" 
        : "Vous voulez vendre votre annonce vacante plus facilement et plus rapidement ?",
      description: language === "en" 
        ? "Partner with us to provide your clients with professional staging services that will help their properties stand out in the market." 
        : "Associez-vous à nous pour offrir à vos clients des services de mise en scène professionnels qui aideront leurs propriétés à se démarquer sur le marché."
    }
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {segments.map((segment, index) => (
            <Segment 
              key={index}
              title={segment.title} 
              tagline={segment.tagline} 
              description={segment.description} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerSegments;
