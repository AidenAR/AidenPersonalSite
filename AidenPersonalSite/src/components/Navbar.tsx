
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed w-full top-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold font-heading">
          <span className="gradient-text">AR</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#" className="btn-outline">Resume</a>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-40 flex flex-col justify-center items-center space-y-8 md:hidden transition-transform duration-300 ease-in-out",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <a href="#about" className="text-xl font-medium" onClick={() => setIsMenuOpen(false)}>About</a>
        <a href="#projects" className="text-xl font-medium" onClick={() => setIsMenuOpen(false)}>Projects</a>
        <a href="#experience" className="text-xl font-medium" onClick={() => setIsMenuOpen(false)}>Experience</a>
        <a href="#contact" className="text-xl font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
        <a href="#" className="btn-primary" onClick={() => setIsMenuOpen(false)}>Resume</a>
      </div>
    </header>
  );
};

export default Navbar;
