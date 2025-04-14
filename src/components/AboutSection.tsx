
import React from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';

const AboutSection = () => {
  const { language } = useTheme();
  
  return (
    <div className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1602872030490-4a484a7b3ba6?q=80&w=2940&auto=format&fit=crop" 
              alt={language === "en" ? "Interior designer working" : "Designer d'intérieur au travail"} 
              className="w-full h-auto rounded-md shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              {language === "en" ? "About Our Staging Services" : "À Propos de Nos Services de Mise en Scène"}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {language === "en" 
                ? "We are a professional home staging company dedicated to transforming vacant or occupied properties into appealing, marketable homes that sell faster and for a higher price." 
                : "Nous sommes une entreprise professionnelle de mise en scène qui se consacre à transformer des propriétés vacantes ou occupées en maisons attrayantes et commercialisables qui se vendent plus rapidement et à un prix plus élevé."}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {language === "en" 
                ? "Our team of experienced designers understands what buyers are looking for and how to highlight your property's best features while minimizing any flaws. We use a carefully curated collection of furniture, artwork, and accessories to create an emotional connection with potential buyers." 
                : "Notre équipe de designers expérimentés comprend ce que recherchent les acheteurs et comment mettre en valeur les meilleures caractéristiques de votre propriété tout en minimisant les défauts. Nous utilisons une collection soigneusement sélectionnée de meubles, d'œuvres d'art et d'accessoires pour créer une connexion émotionnelle avec les acheteurs potentiels."}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600">
                {language === "en" ? "Our Process" : "Notre Processus"}
              </Button>
              <Button variant="outline" className="border-gray-800 text-gray-800 dark:border-gray-400 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                {language === "en" ? "Meet Our Team" : "Rencontrer Notre Équipe"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
