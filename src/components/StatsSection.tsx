
import React from 'react';
import { useTheme } from './ThemeProvider';

const StatsSection = () => {
  const { language } = useTheme();
  
  const stats = [
    { 
      id: 1, 
      value: '250+', 
      label: language === "en" ? 'Properties Staged' : 'Propriétés Mises en Scène' 
    },
    { 
      id: 2, 
      value: '15', 
      label: language === "en" ? 'Days Average Time on Market' : 'Jours en Moyenne sur le Marché' 
    },
    { 
      id: 3, 
      value: '10%', 
      label: language === "en" ? 'Higher Selling Price' : 'Prix de Vente Plus Élevé' 
    },
    { 
      id: 4, 
      value: '98%', 
      label: language === "en" ? 'Client Satisfaction' : 'Satisfaction Client' 
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-300 uppercase tracking-wider text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
