import React from 'react';
import { Book, Music, Mountain, Paintbrush } from 'lucide-react';

const hobbies = [
  {
    name: 'Reading',
        icon: Book,
    bgColor: 'bg-yellow-100',
    textColor: 'text-gray-800'
  },
  {
    name: 'Music',
    icon: Music,
    bgColor: 'bg-yellow-200',
    textColor: 'text-yellow-900'
  },
  {
    name: 'Skating',
    icon: Mountain,
    bgColor: 'bg-yellow-200',
    textColor: 'text-gray-900'
  },
  {
    name: 'Art & Painting',
    icon: Paintbrush,
    bgColor: 'bg-yellow-100',
    textColor: 'text-pink-800'
  }
];

const HobbiesSection: React.FC = () => {
  return (
    <section 
      id="hobbies" 
      className="py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          <span className="inline-block border-b-4 border-yellow-300 pb-2">Hobbies & Interests</span>
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {hobbies.map((hobby, index) => {
            const IconComponent = hobby.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className={`p-4 ${hobby.bgColor}`}>
                  <IconComponent size={32} className={hobby.textColor} />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{hobby.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
