import React from 'react';
import { ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: 'Bits and Bytes of Computer Networking',
    issuer: 'Coursera',
    date: 'October 2023',
    description: 'Comprehensive certification validating expertise in designing distributed systems on AWS.',
    link: 'https://drive.google.com/file/d/1Gl3Lttli1-yTocxH0SUCe8Ji3Ze3PjmF/view?usp=drive_link'
  },
  {
    title: 'Data Structures and Algorithm',
    issuer: 'Udemy',
    date: 'May 2024',
    description: 'Advanced certification in frontend development with React and modern web technologies.',
    link: 'https://drive.google.com/file/d/1bGwJhXd1gxRSDJWwyyUP2Jcu1dWn6P6p/view?usp=drive_link'
  },
  {
    title: 'Core and Advanced Java',
    issuer: 'Board Infinity',
    date: 'June 2024',
    description: 'Comprehensive course covering machine learning algorithms, deep learning, and practical applications.',
    link: 'https://drive.google.com/file/d/1QVRIG6UyyF-317o4VCcleRSmpk6_CydQ/view?usp=drive_link'
  },
  {
    title: 'Getting Started with AI and Machine Learning',
    issuer: 'LinkedIn',
    date: 'February 2023',
    description: 'Neural Networks, Machine Learning, Artificial Intelligence (AI)',
    link: 'https://drive.google.com/file/d/1-xzyablXq-MFZsgH_6P6KnQ6mrpU7BG6/view?usp=drive_link'
  },
];

const CertificatesSection: React.FC = () => {
  return (
    <section 
      id="certificates" 
      className="py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          <span className="inline-block border-b-4 border-yellow-300 pb-2">Certificates & Courses</span>
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-gray-700 font-medium">{cert.issuer}</span>
                  <span className="text-sm text-gray-500">{cert.date}</span>
                </div>
                <p className="text-gray-600 mb-4 flex-grow">{cert.description}</p>
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 transition-colors mt-auto"
                >
                  <span>View Certificate</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;