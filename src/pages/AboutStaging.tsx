
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../components/ThemeProvider';

const AboutStaging = () => {
  const { language } = useTheme();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gray-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-serif font-bold mb-4 text-center">
              {language === "en" ? "About Home Staging" : "À Propos du Home Staging"}
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              {language === "en" 
                ? "Learn why home staging is a crucial investment when selling your property" 
                : "Découvrez pourquoi le home staging est un investissement crucial lors de la vente de votre propriété"}
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-6 dark:text-white">
              {language === "en" ? "What is Home Staging?" : "Qu'est-ce que le Home Staging ?"}
            </h2>
            <p className="text-lg mb-6 dark:text-gray-300">
              {language === "en"
                ? "Home staging is the process of preparing a property for sale by strategically arranging furniture, accessories, and decor to showcase the home's best features and help potential buyers envision themselves living in the space."
                : "Le home staging est le processus de préparation d'une propriété pour la vente en arrangeant stratégiquement les meubles, les accessoires et la décoration pour mettre en valeur les meilleures caractéristiques de la maison et aider les acheteurs potentiels à s'imaginer vivre dans cet espace."}
            </p>
            <p className="mb-10 dark:text-gray-300">
              {language === "en"
                ? "Unlike interior design, which focuses on personal style preferences, home staging is specifically designed to appeal to a broad range of potential buyers and create an emotional connection that drives offers."
                : "Contrairement à la décoration d'intérieur, qui se concentre sur les préférences de style personnel, le home staging est spécifiquement conçu pour plaire à un large éventail d'acheteurs potentiels et créer une connexion émotionnelle qui suscite des offres."}
            </p>
            
            <h2 className="text-3xl font-serif font-bold mb-6 dark:text-white">
              {language === "en" ? "Why Stage Your Home?" : "Pourquoi Mettre en Scène Votre Maison ?"}
            </h2>
            <div className="space-y-6 mb-10">
              <div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {language === "en" ? "Faster Sale" : "Vente Plus Rapide"}
                </h3>
                <p className="dark:text-gray-300">
                  {language === "en"
                    ? "Staged homes typically sell 73% faster than non-staged homes. When buyers can visualize themselves in the space, they're more likely to make an offer quickly."
                    : "Les maisons mises en scène se vendent généralement 73% plus rapidement que les maisons non mises en scène. Lorsque les acheteurs peuvent se visualiser dans l'espace, ils sont plus susceptibles de faire une offre rapidement."}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {language === "en" ? "Higher Selling Price" : "Prix de Vente Plus Élevé"}
                </h3>
                <p className="dark:text-gray-300">
                  {language === "en"
                    ? "Statistics show that staged homes sell for 1-10% more than non-staged homes. The investment in staging typically yields a return of 5-15 times the cost."
                    : "Les statistiques montrent que les maisons mises en scène se vendent 1-10% plus cher que les maisons non mises en scène. L'investissement dans la mise en scène génère généralement un rendement de 5 à 15 fois le coût."}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {language === "en" ? "Better Photos" : "Meilleures Photos"}
                </h3>
                <p className="dark:text-gray-300">
                  {language === "en"
                    ? "In today's digital-first real estate market, online photos are the first impression buyers have of your home. Staged homes photograph significantly better, attracting more potential buyers to in-person viewings."
                    : "Dans le marché immobilier d'aujourd'hui, prioritairement numérique, les photos en ligne sont la première impression que les acheteurs ont de votre maison. Les maisons mises en scène se photographient nettement mieux, attirant davantage d'acheteurs potentiels pour des visites en personne."}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {language === "en" ? "Highlight Best Features" : "Mettre en Valeur les Meilleures Caractéristiques"}
                </h3>
                <p className="dark:text-gray-300">
                  {language === "en"
                    ? "Professional stagers know how to draw attention to your home's best features while minimizing any flaws, creating a more appealing overall impression."
                    : "Les professionnels de la mise en scène savent comment attirer l'attention sur les meilleures caractéristiques de votre maison tout en minimisant les défauts, créant une impression générale plus attrayante."}
                </p>
              </div>
            </div>
            
            <h2 className="text-3xl font-serif font-bold mb-6 dark:text-white">
              {language === "en" ? "The Home Staging Process" : "Le Processus de Home Staging"}
            </h2>
            <ol className="list-decimal pl-6 space-y-4 mb-10 dark:text-gray-300">
              <li>
                <strong>{language === "en" ? "Initial Consultation:" : "Consultation Initiale:"}</strong>
                {language === "en"
                  ? " We assess your property, discuss your goals, and develop a staging strategy tailored to your home and target market."
                  : " Nous évaluons votre propriété, discutons de vos objectifs et développons une stratégie de mise en scène adaptée à votre maison et à votre marché cible."}
              </li>
              <li>
                <strong>{language === "en" ? "Preparation:" : "Préparation:"}</strong>
                {language === "en"
                  ? " We may recommend minor repairs, painting, decluttering, or other preparations to ensure your home is ready for staging."
                  : " Nous pouvons recommander des réparations mineures, de la peinture, du désencombrement ou d'autres préparations pour vous assurer que votre maison est prête pour la mise en scène."}
              </li>
              <li>
                <strong>{language === "en" ? "Staging Implementation:" : "Mise en Œuvre du Staging:"}</strong>
                {language === "en"
                  ? " Our team brings in carefully selected furniture, artwork, and accessories to create an appealing, cohesive look throughout the home."
                  : " Notre équipe apporte des meubles, des œuvres d'art et des accessoires soigneusement sélectionnés pour créer un look attrayant et cohérent dans toute la maison."}
              </li>
              <li>
                <strong>{language === "en" ? "Photography:" : "Photographie:"}</strong>
                {language === "en"
                  ? " Once staging is complete, professional photos are taken for marketing materials and online listings."
                  : " Une fois la mise en scène terminée, des photos professionnelles sont prises pour les supports marketing et les annonces en ligne."}
              </li>
              <li>
                <strong>{language === "en" ? "Maintenance:" : "Maintenance:"}</strong>
                {language === "en"
                  ? " Staged furnishings typically remain in place until the home sells, with our team providing periodic refreshes as needed."
                  : " Les meubles mis en scène restent généralement en place jusqu'à la vente de la maison, notre équipe fournissant des rafraîchissements périodiques si nécessaire."}
              </li>
            </ol>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-md">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">
                {language === "en" ? "Ready to Stage Your Home?" : "Prêt à Mettre en Scène Votre Maison ?"}
              </h3>
              <p className="mb-4 dark:text-gray-300">
                {language === "en"
                  ? "Contact us today to schedule a consultation and learn how our professional staging services can help you sell your property faster and for a better price."
                  : "Contactez-nous dès aujourd'hui pour planifier une consultation et découvrir comment nos services professionnels de mise en scène peuvent vous aider à vendre votre propriété plus rapidement et à un meilleur prix."}
              </p>
              <div className="flex gap-4">
                <a href="/contact" className="inline-block px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors dark:bg-gray-600 dark:hover:bg-gray-500">
                  {language === "en" ? "Contact Us" : "Contactez-Nous"}
                </a>
                <a href="/services" className="inline-block px-6 py-3 bg-white border border-gray-300 text-gray-800 rounded-md hover:bg-gray-50 transition-colors dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-900">
                  {language === "en" ? "Our Services" : "Nos Services"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutStaging;
