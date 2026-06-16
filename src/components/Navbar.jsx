import React, { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'About Us', href: '#about', hoverColor: 'hover:text-makao-blue' },
    { label: 'Our Programs', href: '#programs', hoverColor: 'hover:text-makao-pink' },
    { label: 'Impact Stories', href: '#impact', hoverColor: 'hover:text-makao-green' },
    { label: 'Contact', href: '#contact', hoverColor: 'hover:text-makao-yellow' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Brand Section */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <img 
              src="/log.svg" 
              alt="Makao Children's Ministries Uganda Logo" 
              className="h-14 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
            />
            <div className="flex flex-col justify-center">
              <span className="font-black text-lg md:text-xl tracking-tight text-makao-blue leading-tight uppercase">
                Makao Children's
              </span>
              <span className="text-[10px] md:text-xs font-bold tracking-widest text-makao-dark uppercase opacity-90 -mt-0.5">
                Ministries Uganda
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 font-semibold">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className={`text-gray-600 transition-colors duration-200 ${link.hoverColor}`}
              >
                {link.label}
              </a>
            ))}
            
            {/* CTA Button */}
            <button className="bg-makao-pink hover:bg-opacity-90 text-white px-5 py-2.5 rounded-full font-bold shadow-md transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2">
              <Heart className="w-4 h-4 fill-current" />
              <span>Partner With Us</span>
            </button>
          </div>

          {/* Mobile Menu Button Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-makao-blue focus:outline-none p-2 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      <div 
        className={`md:hidden absolute left-0 right-0 bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100 max-h-screen' : 'opacity-0 scale-y-0 max-h-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-3 pb-6 space-y-3 bg-white">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)} // Close dropdown on link click
              className={`block px-4 py-3 rounded-xl font-medium text-gray-700 hover:bg-slate-50 transition-colors ${link.hoverColor}`}
            >
              {link.label}
            </a>
          ))}
          
          <div className="pt-2 px-4">
            <button className="w-full bg-makao-pink text-white py-3.5 rounded-xl font-bold shadow-md active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              <Heart className="w-5 h-5 fill-current" />
              <span>Partner With Us</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}