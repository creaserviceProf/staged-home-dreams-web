
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import { useTheme } from '../components/ThemeProvider';

const Contact = () => {
  const { language } = useTheme();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gray-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-serif font-bold mb-4 text-center">
              {language === "en" ? "Contact Us" : "Contactez-Nous"}
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              {language === "en"
                ? "Have questions or ready to transform your property? We're here to help."
                : "Vous avez des questions ou êtes prêt à transformer votre propriété ? Nous sommes là pour vous aider."}
            </p>
          </div>
        </div>
        
        <ContactSection />
        
        <div className="w-full h-96">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0837905236513!2d-122.41941368406471!3d37.77492997975828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sMarket%20St%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title={language === "en" ? "Office Location" : "Emplacement du Bureau"}
          ></iframe>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
