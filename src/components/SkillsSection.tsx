import React from 'react';

const skills = [
  { category: 'Programming Languages', items: ['JavaScript', 'C++', 'Python', 'SQL'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Django'] },
  { category: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'] },
  { category: 'DevOps & Tools', items: ['Git', 'Postman', 'Github'] },
];

const SkillItem: React.FC<{ name: string }> = ({ name }) => (
  <div className="bg-yellow-50 hover:bg-yellow-100 border border-yellow-200 rounded-md px-4 py-2 transition-all transform hover:scale-105">
    <span className="text-gray-800">{name}</span>
  </div>
);

const SkillsSection: React.FC = () => {
  return (
    <section 
      id="skills" 
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            <span className="inline-block border-b-4 border-yellow-300 pb-2">Skills & Technologies</span>
          </h2>
          
          <div className="space-y-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-800">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <SkillItem key={skillIndex} name={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;