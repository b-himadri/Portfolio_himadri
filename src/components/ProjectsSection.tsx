import React from 'react';
import { Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Sanafia – PCOS Symptom Checker Quiz',
    description: 'A PCOS symptom checker website that uses a React-based quiz and Node.js backend. Integrates GPT AI API to analyze user inputs and generate a personalized result in PDF form.',
    tech: ['React', 'Node.js', 'Express', 'GPT API', 'PDF Generation'],
    github: 'https://github.com/b-himadri',
  },
  {
    id: 2,
    title: 'HarmonyWithLife – Lifestyle Management System',
    description: 'Created a system with an expense tracker, diet tracker, and journal log. Developed APIs to manage finances, monitor diet, and maintain a personal journal.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'MySQL', 'Node.js', 'Express'],
    github: 'https://github.com/b-himadri',
  },
  {
    id: 3,
    title: 'BookStore Project – MERN Stack Web Application',
    description: 'A web application designed to simplify bookstore operations, from inventory management to customer browsing. Features include book searching, inventory updates, and data management via RESTful APIs. Utilizes a modern and responsive design.',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS'],
    github: 'https://github.com/b-himadri',
  },
  {
    id: 4,
    title: 'GPTGEEK – Smart Book Recommender',
    description: 'An intelligent book recommendation system that personalizes suggestions based on user preferences, reading history, mood, and writing style. Features deep personalization with persistent user profiles, adaptive AI learning, and real-time refinements for highly tailored recommendations. Deployed and accessible via a custom domain.',
    tech: ['Next.js', 'Tailwind CSS', 'Express.js', 'PostgreSQL', 'Pinecone', 'Gemini API', 'NextAuth.js'],
    github: 'https://github.com/b-himadri',
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          <span className="inline-block border-b-4 border-yellow-300 pb-2">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 relative z-10">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="inline-block px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors z-20">
                  <Github size={18} />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
