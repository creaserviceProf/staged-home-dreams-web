
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../components/ThemeProvider';

const About = () => {
  const { language } = useTheme();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-serif font-bold mb-8 dark:text-white">
            {language === "en" ? "About Us" : "À Propos de Nous"}
          </h1>
          <p className="text-lg mb-6 dark:text-gray-300">
            {language === "en" 
              ? "Welcome to Home Staging Company, where we transform ordinary spaces into extraordinary showcases that sell."
              : "Bienvenue chez Home Staging Company, où nous transformons des espaces ordinaires en vitrines extraordinaires qui se vendent."}
          </p>
          <p className="mb-6 dark:text-gray-300">
            {language === "en"
              ? "Since our founding in 2010, we've been helping homeowners, realtors, and investors maximize their property's potential through expert staging services. Our team of professional designers brings years of experience and a keen eye for design to every project, ensuring that each space we stage makes a lasting impression on potential buyers."
              : "Depuis notre fondation en 2010, nous aidons les propriétaires, les agents immobiliers et les investisseurs à maximiser le potentiel de leur propriété grâce à des services de mise en scène d'experts. Notre équipe de designers professionnels apporte des années d'expérience et un œil avisé pour le design à chaque projet, assurant que chaque espace que nous mettons en scène laisse une impression durable sur les acheteurs potentiels."}
          </p>
          <p className="mb-6 dark:text-gray-300">
            {language === "en"
              ? "What sets us apart is our commitment to understanding both the property and the target market. We carefully analyze each space to highlight its strengths and minimize any weaknesses, creating a balanced and appealing environment that helps buyers envision themselves living there."
              : "Ce qui nous distingue, c'est notre engagement à comprendre à la fois la propriété et le marché cible. Nous analysons soigneusement chaque espace pour mettre en valeur ses points forts et minimiser ses faiblesses, créant un environnement équilibré et attrayant qui aide les acheteurs à s'imaginer y vivre."}
          </p>
          <p className="mb-6 dark:text-gray-300">
            {language === "en"
              ? "Our extensive inventory of contemporary furniture, artwork, and accessories allows us to customize each staging to the specific property and target demographic, ensuring that we create the right look and feel for every home we stage."
              : "Notre vaste inventaire de meubles contemporains, d'œuvres d'art et d'accessoires nous permet de personnaliser chaque mise en scène en fonction de la propriété spécifique et de la démographie cible, garantissant que nous créons l'apparence et l'ambiance appropriées pour chaque maison que nous mettons en scène."}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
