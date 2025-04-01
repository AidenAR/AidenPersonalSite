
import React from 'react';
import { Github, Linkedin, Mail, ArrowRight, FileText } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col justify-center pt-16"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,1) 50%, rgba(255,240,245,1) 100%)"
      }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading">
              Hi, I'm <span className="gradient-text">Aiden Ramgoolam</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Computer Science student at University of Waterloo, specializing in Data Science & AI
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Passionate about building innovative solutions and leveraging cutting-edge technology to solve real-world problems. When I'm not coding, I enjoy rock climbing, powerlifting, exploring nature, trying new foods, and dancing to Soca music.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary flex items-center gap-2">
                View Projects <ArrowRight size={18} />
              </a>
              <a href="#" className="btn-outline flex items-center gap-2">
                Resume <FileText size={18} />
              </a>
              <a href="#contact" className="btn-outline">Contact Me</a>
            </div>
            
            <div className="flex space-x-4 mt-8">
              <a 
                href="https://linkedin.com/in/aiden-ramgoolam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/AidenAR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="mailto:aaramgoo@uwaterloo.ca" 
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="aspect-square rounded-full bg-gradient-to-br from-caribbean-red to-uwaterloo-gold p-1">
                <div className="h-full w-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  {/* You can replace this with an actual image once you have one */}
                  <div className="w-full h-full flex items-center justify-center">
                    {/* Profile Image Placeholder */}
                    <div className="relative w-full h-full">
                      {/* When you have a profile image, uncomment this and add your image path */}
                      {/* 
                      <img 
                        src="/path-to-your-profile-image.jpg" 
                        alt="Aiden Ramgoolam" 
                        className="object-cover w-full h-full rounded-full"
                      /> 
                      */}
                      
                      {/* Placeholder text (remove this when you add an image) */}
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                        <span className="text-6xl font-heading">AR</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Optional: Caribbean flag colors indicator */}
              <div className="absolute -bottom-2 right-10 flex space-x-1">
                <span className="w-3 h-3 rounded-full bg-red-600" title="Trinidad & Tobago"></span>
                <span className="w-3 h-3 rounded-full bg-black" title="Trinidad & Tobago"></span>
                <span className="w-3 h-3 rounded-full bg-white" title="Trinidad & Tobago"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" className="flex flex-col items-center text-gray-400">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowRight size={20} className="transform rotate-90" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
