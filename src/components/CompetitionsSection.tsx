import React from 'react';
import { Trophy, Award, Medal } from 'lucide-react';

const competitions = [
  {
    title: 'CSE Section of the Year',
    achievement: 'Runner-up (Web Mania category)',
    description: 'Secured the Runner-up position in the "Web Mania" category among 200+ sections competing in the CSE Department\'s annual Section of the Year competition. Demonstrated expertise in web development skills, quick problem-solving, and creativity under timed challenges.',
    icon: Award
  },
  {
    title: 'SIH 2024',
    achievement: 'College-Level Participant',
    description: 'Successfully participated in the College Level round of Smart India Hackathon 2024 (SIH 2024). Collaborated with a team to conceptualize and design innovative solutions for real-world challenges under the guidance of mentors. Gained valuable experience in problem-solving, project management, and teamwork in a competitive environment.',
    icon: Trophy
  },
  {
    title: 'Flipkart Grid',
    achievement: 'Cleared the first two initial round and gained participation certificate',
    icon: Medal
  }
];



const CompetitionsSection: React.FC = () => {
  return (
    <section 
      id="competitions" 
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          <span className="inline-block border-b-4 border-yellow-300 pb-2">Competitions & Achievements</span>
        </h2>
        
        <div className="max-w-5xl mx-auto">
          {/* Competitions */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Hackathons & Competitions</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {competitions.map((comp, index) => {
                const IconComponent = comp.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="mr-4 bg-yellow-200 p-3 rounded-full">
                        <IconComponent size={24} className="text-gray-800" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900">{comp.title}</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                          <div className="hidden sm:block text-gray-400">•</div>
                          <span className="text-yellow-600 font-medium">{comp.achievement}</span>
                        </div>
                        <p className="text-gray-600">{comp.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
       
        </div>
      </div>
    </section>
  );
};

export default CompetitionsSection;