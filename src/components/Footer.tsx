import React from 'react';
import { Mail, Phone, Linkedin, Github, Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
<footer className="relative z-50 bg-gray-900 text-white py-12">
<div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Himadri Barad</h2>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a 
              href="mailto:baradhimadri264@gmail.com" 
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md transition-colors"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
            <a 
              href="tel:+918619469754" 
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md transition-colors"
            >
              <Phone size={18} />
              <span>Call</span>
            </a>
            <a 
              href="/himadriCV.pdf" 
              download
              className="flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              <span>Download CV</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Himadri Barad. All rights reserved.
          </div>

          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com/in/himadri-barad264" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-yellow-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/b-himadri" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-yellow-300 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://leetcode.com/baradhimadri/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-yellow-300 transition-colors"
              aria-label="LeetCode"
            >
              <Code2 size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
