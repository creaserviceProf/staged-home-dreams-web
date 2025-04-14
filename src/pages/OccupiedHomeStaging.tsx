import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../components/ThemeProvider';

const OccupiedHomeStaging = () => {
  const { language } = useTheme();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-serif font-bold mb-8 text-center dark:text-white">
            {language === "en" ? 'Occupied Home Staging' : 'Mise en Scène de Maison Occupée'}
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12 dark:text-gray-300">
            {language === "en"
              ? "We work with your existing furniture and belongings, rearranging and supplementing as needed to showcase your home's best features while maintaining functionality for daily living."
              : "Nous travaillons avec vos meubles et effets personnels existants, en réarrangeant et en complétant si nécessaire pour mettre en valeur les meilleures caractéristiques de votre maison tout en maintenant la fonctionnalité pour la vie quotidienne."}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OccupiedHomeStaging; 