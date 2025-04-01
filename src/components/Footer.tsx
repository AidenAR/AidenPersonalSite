
import React from 'react';
import { ArrowUp, Heart, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-bold mb-4">Aiden Ramgoolam</h3>
            <p className="text-gray-400">Computer Science student at University of Waterloo</p>
            <p className="text-gray-400 mt-2">Open to full-time opportunities and internships</p>
            <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
              <span>Built with</span>
              <Heart size={14} className="text-primary" />
              <span>and</span>
              <Coffee size={14} />
            </div>
          </div>
          
          <div className="mt-8 md:mt-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {currentYear} Aiden Ramgoolam. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a 
              href="#hero"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full inline-flex items-center justify-center transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
