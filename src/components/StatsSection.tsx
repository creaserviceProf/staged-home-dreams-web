
import React from 'react';

const stats = [
  { id: 1, value: '250+', label: 'Properties Staged' },
  { id: 2, value: '15', label: 'Days Average Time on Market' },
  { id: 3, value: '10%', label: 'Higher Selling Price' },
  { id: 4, value: '98%', label: 'Client Satisfaction' },
];

const StatsSection = () => {
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
