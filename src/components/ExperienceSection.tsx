import React from 'react';

const experiences = [
  {
    company: 'InfoEdge',
    position: 'Backend Developer',
    period: 'March 2025 - Present',
    description: [
      'Integrated ATS tracking and data-saving functionalities into the backend infrastructure using Python, Django and SSMS.',
      'Improved website performance by 40% through designing and optimizing database schemas, implementing RESTful APIs ensuring efficient data processing and retrieval.',
      'Tech stacks used: SSMS, React.js , Python, Django',
    ],
  },

];

const ExperienceSection: React.FC = () => {
  return (
    <section 
      id="experience" 
      className="py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          <span className="inline-block border-b-4 border-yellow-300 pb-2">Work Experience</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-yellow-300 before:via-yellow-200 before:to-gray-200">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start md:justify-between group">
                {/* Timeline dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-yellow-300 text-gray-800 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="font-bold">{index + 1}</span>
                </div>
                
                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                    <span className="inline-flex items-center justify-center px-3 py-1 mt-2 md:mt-0 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                      {exp.period}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">{exp.company}</h4>
                  
                  <ul className="space-y-2 list-disc list-inside text-gray-600">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;