import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useTheme } from '../components/ThemeProvider';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles

const VacantHomeStaging = () => {
  const { language } = useTheme();
  const [date, setDate] = useState(new Date());
  const [occupiedDates, setOccupiedDates] = useState([]);

  useEffect(() => {
    // Generate random occupied dates
    const generateRandomOccupiedDates = () => {
      const dates = [];
      const startDate = new Date(); // Start from today
      const endDate = new Date(startDate);
      endDate.setMonth(startDate.getMonth() + 2); // Two months ahead

      while (startDate < endDate) {
        // Randomly decide to occupy some dates
        if (Math.random() < 0.3) { // 30% chance to occupy a date
          dates.push(new Date(startDate));
        }
        startDate.setDate(startDate.getDate() + 1); // Move to the next day
      }
      return dates;
    };

    setOccupiedDates(generateRandomOccupiedDates());
  }, []);

  const isOccupied = (date) => {
    return occupiedDates.some(occupiedDate => 
      occupiedDate.toDateString() === date.toDateString()
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-serif font-bold mb-8 text-center dark:text-white">
            {language === "en" ? 'Vacant Home Staging' : 'Mise en Scène de Maison Vacante'}
          </h1>
          <img 
            src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2940&auto=format&fit=crop" 
            alt="Vacant Home Staging" 
            className="rounded-md shadow-md w-full h-auto mb-8"
          />
          <p className="text-lg text-center max-w-3xl mx-auto mb-12 dark:text-gray-300">
            {language === "en"
              ? "Vacant home staging transforms empty spaces into inviting homes that buyers can envision themselves living in. Our team brings in furniture, artwork, and accessories to create a warm, welcoming atmosphere."
              : "La mise en scène de maisons vacantes transforme les espaces vides en maisons accueillantes où les acheteurs peuvent s'imaginer vivre. Notre équipe apporte des meubles, des œuvres d'art et des accessoires pour créer une atmosphère chaleureuse et accueillante."}
          </p>
          <h2 className="text-2xl font-serif font-bold mb-4 text-center dark:text-white">
            {language === "en" ? 'Availability Calendar' : 'Calendrier de Disponibilité'}
          </h2>
          <Calendar
            onChange={setDate}
            value={date}
            tileClassName={({ date }) => isOccupied(date) ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VacantHomeStaging; 