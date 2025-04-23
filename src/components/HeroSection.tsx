import React from 'react';
import { Download, Linkedin, Github, Code2 } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section 
    id="hero" 
    className="relative z-10 pt-24 pb-16 min-h-screen flex items-center bg-gradient-to-b from-yellow-50 to-white"
  >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Profile Photo */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-yellow-200 shadow-lg">
                <img 
                  src="/himadri_portfolio_image.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            
            </div>
          </div>
          
          {/* Info */}
          <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                Himadri Barad
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-600">
              Full Stack Developer
            </h2>
            
            <div className="max-w-2xl space-y-4">
              <p className="text-gray-700 leading-relaxed">
              I'm a passionate software engineer with a strong focus on full stack development. I create elegant solutions that combine clean code with outstanding user experiences. I specialize in building scalable web applications using React, Javascript, and modern web technologies, always aiming to deliver impactful digital products.
              </p>
              
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <div className="flex items-center gap-1 text-gray-700">
                  <span className="font-medium">Email:</span>
                  <a href="mailto:baradhimadri264@gmail.com" className="hover:text-yellow-600 underline">
                    baradhimadri264@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-1 text-gray-700">
                  <span className="font-medium">Phone:</span>
                  <a href="tel:+1234567890" className="hover:text-yellow-600">
                    +91 8619469754
                  </a>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="https://linkedin.com/in/himadri-barad264" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-yellow-200 hover:bg-yellow-300 text-gray-800 px-4 py-2 rounded-md transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://github.com/b-himadri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://leetcode.com/u/baradhimadri" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-md transition-colors"
              >
                <Code2 size={20} />
                <span>LeetCode</span>
              </a>
            </div>
            
            {/* Download CV Button */}
            <div>
              <a 
                href="/himadriCV.pdf" 
                download
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-md transition-colors shadow-md"
              >
                <Download size={20} />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;