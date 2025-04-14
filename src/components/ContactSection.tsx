
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useTheme } from './ThemeProvider';

const ContactSection = () => {
  const { language } = useTheme();
  
  return (
    <div className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 dark:text-white">
          {language === "en" ? "Get In Touch" : "Contactez-Nous"}
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {language === "en" ? "Name" : "Nom"}
                  </label>
                  <Input id="name" placeholder={language === "en" ? "Your name" : "Votre nom"} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {language === "en" ? "Email" : "Email"}
                  </label>
                  <Input id="email" type="email" placeholder={language === "en" ? "Your email" : "Votre email"} />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {language === "en" ? "Subject" : "Sujet"}
                </label>
                <Input id="subject" placeholder={language === "en" ? "How can we help you?" : "Comment pouvons-nous vous aider ?"} />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {language === "en" ? "Message" : "Message"}
                </label>
                <Textarea id="message" placeholder={language === "en" ? "Your message" : "Votre message"} rows={5} />
              </div>
              
              <Button type="submit" className="w-full bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600">
                {language === "en" ? "Send Message" : "Envoyer le Message"}
              </Button>
            </form>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-md h-full">
              <h3 className="text-2xl font-serif font-semibold mb-6 dark:text-white">
                {language === "en" ? "Contact Information" : "Informations de Contact"}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-gray-600 dark:text-gray-400 mr-4 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      {language === "en" ? "Our Office" : "Notre Bureau"}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">123 Staging Street, Suite 100</p>
                    <p className="text-gray-600 dark:text-gray-400">San Francisco, CA 94103</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-gray-600 dark:text-gray-400 mr-4" />
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      {language === "en" ? "Phone" : "Téléphone"}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-gray-600 dark:text-gray-400 mr-4" />
                  <div>
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      {language === "en" ? "Email" : "Email"}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">info@homestagingcompany.com</p>
                  </div>
                </div>
                
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200 mb-2">
                    {language === "en" ? "Business Hours" : "Heures d'Ouverture"}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {language === "en" ? "Monday - Friday: 9am - 5pm" : "Lundi - Vendredi: 9h - 17h"}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {language === "en" ? "Saturday: By appointment" : "Samedi: Sur rendez-vous"}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {language === "en" ? "Sunday: Closed" : "Dimanche: Fermé"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
